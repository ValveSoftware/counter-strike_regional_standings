### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Global Rank: [85](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [52]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  776.4<br />
<br />
Final Rank Value (776.4) = Starting Rank Value (771.1) + Head To Head Adjustments (5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.147[<sup>2</sup>](#table1)
- LAN Wins: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 771.1
- 400 + ( ( 0.205 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 771.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      906 | 2025-03-24 | Hesta             | L   | 0.920      | -            | -                | -                | -         |   -21.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |      922 | 2025-03-23 | ECSTATIC          | L   | 0.912      | -            | -                | -                | -         |   -10.52 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |      960 | 2025-03-21 | WildLotus         | W   | 0.900      | 0.396        | -                | 0.319 (0.114)    | 0 (0.000) |     5.19 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |     1004 | 2025-03-19 | ALASKA            | W   | 0.886      | 0.396        | 0.012 (0.004)    | 0.278 (0.097)    | 0 (0.000) |     9.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |     1067 | 2025-03-15 | Aurora            | L   | 0.861      | -            | -                | -                | -         |   -12.31 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |     1076 | 2025-03-15 | PARIVISION        | L   | 0.860      | -            | -                | -                | -         |    -7.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |     1096 | 2025-03-14 | Passion UA        | W   | 0.854      | 0.435        | 0.087 (0.032)    | 0.532 (0.197)    | 0 (0.000) |    18.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |     1140 | 2025-03-11 | Alliance          | L   | 0.835      | -            | -                | -                | -         |   -14.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |     1220 | 2025-03-09 | BetBoom           | L   | 0.821      | -            | -                | -                | -         |    -5.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |     1252 | 2025-03-09 | Sashi             | W   | 0.818      | 0.143        | -                | 0.705 (0.082)    | 0 (0.000) |    14.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     1286 | 2025-03-08 | 500               | W   | 0.814      | 0.435        | 0.074 (0.026)    | 0.740 (0.262)    | 0 (0.000) |    20.49 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     1297 | 2025-03-08 | Nemiga            | L   | 0.814      | -            | -                | -                | -         |    -6.35 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     1380 | 2025-03-07 | GTZ               | W   | 0.806      | 0.143        | 0.028 (0.003)    | -                | 0 (0.000) |    15.02 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     1423 | 2025-03-06 | Sashi             | W   | 0.801      | 0.435        | 0.005 (0.002)    | 0.705 (0.245)    | 0 (0.000) |    16.93 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     1487 | 2025-03-04 | Monte             | L   | 0.786      | -            | -                | -                | -         |   -12.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     1498 | 2025-03-03 | GTZ               | W   | 0.781      | 0.435        | 0.028 (0.010)    | 0.336 (0.114)    | 0 (0.000) |    15.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     1519 | 2025-03-02 | GTZ               | L   | 0.774      | -            | -                | -                | -         |    -9.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     1573 | 2025-02-28 | Sashi             | W   | 0.760      | 0.435        | 0.005 (0.002)    | 0.705 (0.233)    | -         |    16.72 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     1595 | 2025-02-27 | Spirit Academy    | L   | 0.753      | -            | -                | -                | -         |    -8.39 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     1980 | 2025-02-11 | Astralis          | L   | 0.646      | -            | -                | -                | -         |    -0.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     2004 | 2025-02-10 | NEVERMORE         | W   | 0.641      | 0.143        | 0.011 (0.001)    | -                | -         |     9.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     2012 | 2025-02-10 | HEROIC            | L   | 0.640      | -            | -                | -                | -         |    -0.40 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     2066 | 2025-02-08 | Little Red Door   | W   | 0.629      | -            | -                | -                | -         |     4.00 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     2093 | 2025-02-08 | BC.Game           | L   | 0.628      | -            | -                | -                | -         |    -4.72 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     2097 | 2025-02-08 | ENCE              | W   | 0.627      | 0.143        | 0.172 (0.015)    | 0.780 (0.070)    | -         |    16.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     2109 | 2025-02-08 | RUSH B            | L   | 0.626      | -            | -                | -                | -         |    -9.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     2184 | 2025-02-05 | kONO              | L   | 0.608      | -            | -                | -                | -         |   -14.30 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     2215 | 2025-02-04 | RUSH B            | W   | 0.601      | 0.143        | 0.010 (0.001)    | -                | -         |     9.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     2292 | 2025-01-28 | moneyF            | L   | 0.552      | -            | -                | -                | -         |   -13.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     2302 | 2025-01-27 | Adventurers       | W   | 0.546      | -            | -                | -                | -         |     2.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     2311 | 2025-01-26 | AMKAL             | L   | 0.541      | -            | -                | -                | -         |   -10.11 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     2482 | 2024-12-22 | RUSH B            | L   | 0.308      | -            | -                | -                | -         |    -4.99 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     2485 | 2024-12-22 | Metizport         | L   | 0.307      | -            | -                | -                | -         |    -2.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     2603 | 2024-12-14 | ECSTATIC          | L   | 0.252      | -            | -                | -                | -         |    -2.85 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     2637 | 2024-12-12 | AMKAL             | W   | 0.241      | 0.435        | -                | 0.531 (0.056)    | -         |     2.98 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     3012 | 2024-11-23 | ENCE              | L   | 0.114      | -            | -                | -                | -         |    -0.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     3129 | 2024-11-17 | ENTiTY            | W   | 0.075      | -            | -                | -                | 1 (0.075) |     0.61 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     3168 | 2024-11-16 | Juggernauts       | W   | 0.065      | -            | -                | -                | 1 (0.065) |     0.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     3322 | 2024-11-11 | Ninjas in Pyjamas | L   | 0.034      | -            | -                | -                | -         |    -0.75 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     3347 | 2024-11-10 | Gaimin Gladiators | W   | 0.028      | -            | -                | -                | -         |     0.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     3361 | 2024-11-09 | GUN5              | W   | 0.021      | -            | -                | -                | -         |     0.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     3395 | 2024-11-08 | Johnny Speeds     | W   | 0.012      | -            | -                | -                | -         |     0.12 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,016.74)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      0.867 | $2,000.00      | $1,734.78       |
| 2024-12-15 |      0.260 | $2,000.00      | $520.80         |
| 2024-11-24 |      0.120 | $1,000.00      | $119.70         |
| 2024-11-17 |      0.075 | $8,038.00      | $601.32         |
| 2024-11-12 |      0.040 | $1,000.00      | $40.13          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
