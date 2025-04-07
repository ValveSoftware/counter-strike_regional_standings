### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, device, jabbi, Staehr, stavn<br />
Global Rank: [13](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  1516.0<br />
<br />
Final Rank Value (1516.0) = Starting Rank Value (1568.7) + Head To Head Adjustments (-52.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.837[<sup>1</sup>](#table2)
- Bounty Collected: 0.630[<sup>2</sup>](#table1)
- Opponent Network: 0.292[<sup>2</sup>](#table1)
- LAN Wins: 0.780[<sup>2</sup>](#table1)

The average of these factors is 0.634<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1568.7
- 400 + ( ( 0.634 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 1568.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      392 | 2025-03-21 | FaZe          | L   | 1.000      | -            | -                | -                | -         |    -8.67 | cadiaN, device, jabbi, Staehr, stavn |
|           33 |      417 | 2025-03-19 | Vitality      | L   | 1.000      | -            | -                | -                | -         |    -1.67 | cadiaN, device, jabbi, Staehr, stavn |
|           32 |     1038 | 2025-02-23 | FaZe          | W   | 0.913      | 1.000        | 0.724 (0.662)    | 0.430 (0.393)    | 1 (0.913) |    22.00 | cadiaN, device, jabbi, Staehr, stavn |
|           31 |     1062 | 2025-02-22 | MOUZ          | L   | 0.907      | -            | -                | -                | -         |    -3.06 | cadiaN, device, jabbi, Staehr, stavn |
|           30 |     1098 | 2025-02-21 | The MongolZ   | W   | 0.899      | 1.000        | 1.000 (0.899)    | 0.627 (0.564)    | 1 (0.899) |    25.71 | cadiaN, device, jabbi, Staehr, stavn |
|           29 |     1111 | 2025-02-20 | HEROIC        | L   | 0.893      | -            | -                | -                | -         |   -26.03 | cadiaN, device, jabbi, Staehr, stavn |
|           28 |     1127 | 2025-02-18 | BIG           | W   | 0.878      | 1.000        | 0.206 (0.181)    | 0.415 (0.364)    | 1 (0.878) |     3.20 | cadiaN, device, jabbi, Staehr, stavn |
|           27 |     1142 | 2025-02-17 | MIBR          | W   | 0.874      | 1.000        | 0.142 (0.124)    | 0.471 (0.412)    | 1 (0.874) |     4.25 | cadiaN, device, jabbi, Staehr, stavn |
|           26 |     1166 | 2025-02-16 | Falcons       | L   | 0.866      | -            | -                | -                | -         |    -6.17 | cadiaN, device, jabbi, Staehr, stavn |
|           25 |     1189 | 2025-02-15 | SAW           | W   | 0.860      | 1.000        | 0.314 (0.270)    | 0.436 (0.375)    | 1 (0.860) |     6.49 | cadiaN, device, jabbi, Staehr, stavn |
|           24 |     1224 | 2025-02-14 | paiN          | L   | 0.854      | -            | -                | -                | -         |   -14.66 | cadiaN, device, jabbi, Staehr, stavn |
|           23 |     1284 | 2025-02-11 | BetBoom       | W   | 0.835      | 0.143        | -                | 0.913 (0.109)    | -         |     1.40 | cadiaN, device, jabbi, Staehr, stavn |
|           22 |     1294 | 2025-02-11 | Zero Tenacity | W   | 0.833      | -            | -                | -                | -         |     0.51 | cadiaN, device, jabbi, Staehr, stavn |
|           21 |     1321 | 2025-02-10 | BC.Game       | L   | 0.827      | -            | -                | -                | -         |   -24.37 | cadiaN, device, jabbi, Staehr, stavn |
|           20 |     1333 | 2025-02-10 | OG            | W   | 0.825      | 0.143        | -                | 1.000 (0.118)    | -         |     1.02 | cadiaN, device, jabbi, Staehr, stavn |
|           19 |     1358 | 2025-02-09 | PARIVISION    | W   | 0.821      | 0.143        | -                | 1.000 (0.117)    | -         |     0.88 | cadiaN, device, jabbi, Staehr, stavn |
|           18 |     1363 | 2025-02-09 | 500           | W   | 0.820      | 0.143        | -                | 1.000 (0.117)    | -         |     1.58 | cadiaN, device, jabbi, Staehr, stavn |
|           17 |     1421 | 2025-02-08 | 9INE          | W   | 0.813      | -            | -                | -                | -         |     0.70 | cadiaN, device, jabbi, Staehr, stavn |
|           16 |     1541 | 2025-02-04 | GamerLegion   | L   | 0.786      | -            | -                | -                | -         |   -13.35 | cadiaN, device, jabbi, Staehr, stavn |
|           15 |     1548 | 2025-02-03 | FURIA         | W   | 0.781      | 1.000        | 0.157 (0.123)    | 0.444 (0.347)    | 1 (0.781) |     4.66 | cadiaN, device, jabbi, Staehr, stavn |
|           14 |     1562 | 2025-02-02 | Spirit        | L   | 0.773      | -            | -                | -                | -         |    -2.55 | cadiaN, device, jabbi, Staehr, stavn |
|           13 |     1578 | 2025-01-31 | paiN          | W   | 0.761      | 0.143        | 0.378 (0.041)    | -                | 1 (0.761) |    10.76 | cadiaN, device, jabbi, Staehr, stavn |
|           12 |     1586 | 2025-01-30 | FlyQuest      | W   | 0.754      | -            | -                | -                | 1 (0.754) |     0.99 | cadiaN, device, jabbi, Staehr, stavn |
|           11 |     1597 | 2025-01-29 | MIBR          | L   | 0.746      | -            | -                | -                | -         |   -20.11 | cadiaN, device, jabbi, Staehr, stavn |
|           10 |     1632 | 2025-01-18 | Natus Vincere | L   | 0.675      | -            | -                | -                | -         |    -5.92 | cadiaN, device, jabbi, Staehr, stavn |
|            9 |     1647 | 2025-01-15 | Wildcard      | W   | 0.652      | -            | -                | -                | -         |     1.43 | cadiaN, device, jabbi, Staehr, stavn |
|            8 |     2247 | 2024-11-23 | Passion UA    | L   | 0.304      | -            | -                | -                | -         |    -9.32 | br0, cadiaN, jabbi, Staehr, stavn    |
|            7 |     2270 | 2024-11-23 | Eternal Fire  | W   | 0.299      | 0.143        | 0.976 (0.042)    | -                | 1 (0.299) |     7.98 | br0, cadiaN, jabbi, Staehr, stavn    |
|            6 |     2298 | 2024-11-22 | B8            | W   | 0.292      | -            | -                | -                | 1 (0.292) |     0.35 | br0, cadiaN, jabbi, Staehr, stavn    |
|            5 |     2320 | 2024-11-21 | Sashi         | L   | 0.286      | -            | -                | -                | -         |    -8.82 | br0, cadiaN, jabbi, Staehr, stavn    |
|            4 |     2331 | 2024-11-20 | 9 Pandas      | L   | 0.284      | -            | -                | -                | -         |    -8.55 | br0, cadiaN, jabbi, Staehr, stavn    |
|            3 |     2757 | 2024-11-02 | Spirit        | L   | 0.160      | -            | -                | -                | -         |    -0.65 | cadiaN, device, jabbi, Staehr, stavn |
|            2 |     2807 | 2024-10-31 | MOUZ          | W   | 0.145      | 1.000        | 1.000 (0.145)    | -                | -         |     4.19 | cadiaN, device, jabbi, Staehr, stavn |
|            1 |     2829 | 2024-10-30 | Natus Vincere | W   | 0.138      | 1.000        | 0.718 (0.099)    | -                | -         |     3.16 | cadiaN, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($175,169.67)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.64) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-30 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-02-23 |      0.915 | $150,000.00    | $137,230.27     |
| 2025-02-09 |      0.821 | $23,000.00     | $18,876.71      |
| 2024-11-03 |      0.165 | $85,000.00     | $14,062.70      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
