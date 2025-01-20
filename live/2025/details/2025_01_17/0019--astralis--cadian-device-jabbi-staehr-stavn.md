### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, device, jabbi, Staehr, stavn<br />
Global Rank: [19](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1313.5<br />
<br />
Final Rank Value (1313.5) = Starting Rank Value (1307.6) + Head To Head Adjustments (5.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.673[<sup>1</sup>](#table2)
- Bounty Collected: 0.535[<sup>2</sup>](#table1)
- Opponent Network: 0.106[<sup>2</sup>](#table1)
- LAN Wins: 0.517[<sup>2</sup>](#table1)

The average of these factors is 0.458<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1307.6
- 400 + ( ( 0.458 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1307.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |       10 | 2025-01-15 | Wildcard          | W   | 1.000      | 0.143        | 0.231 (0.033)    | 0.636 (0.091)    | -         |    17.53 | cadiaN, device, jabbi, Staehr, stavn |
|           25 |      605 | 2024-11-23 | Passion UA        | L   | 0.836      | -            | -                | -                | -         |   -19.06 | br0, cadiaN, jabbi, Staehr, stavn    |
|           24 |      626 | 2024-11-23 | Eternal Fire      | W   | 0.831      | 0.143        | 0.333 (0.040)    | 0.330 (0.039)    | 1 (0.831) |    14.51 | br0, cadiaN, jabbi, Staehr, stavn    |
|           23 |      654 | 2024-11-22 | B8                | W   | 0.824      | 0.143        | 0.163 (0.019)    | 0.500 (0.059)    | 1 (0.824) |     8.68 | br0, cadiaN, jabbi, Staehr, stavn    |
|           22 |      676 | 2024-11-21 | Sashi             | L   | 0.818      | -            | -                | -                | -         |   -21.63 | br0, cadiaN, jabbi, Staehr, stavn    |
|           21 |      687 | 2024-11-20 | 9 Pandas          | L   | 0.816      | -            | -                | -                | -         |   -17.14 | br0, cadiaN, jabbi, Staehr, stavn    |
|           20 |     1106 | 2024-11-02 | Spirit            | L   | 0.692      | -            | -                | -                | -         |    -0.60 | cadiaN, device, jabbi, Staehr, stavn |
|           19 |     1154 | 2024-10-31 | MOUZ              | W   | 0.677      | 1.000        | 0.677 (0.459)    | 0.479 (0.325)    | 1 (0.677) |    19.91 | cadiaN, device, jabbi, Staehr, stavn |
|           18 |     1176 | 2024-10-30 | Natus Vincere     | W   | 0.670      | 1.000        | 1.000 (0.670)    | 0.526 (0.352)    | 1 (0.670) |    19.82 | cadiaN, device, jabbi, Staehr, stavn |
|           17 |     1568 | 2024-10-09 | Virtus.pro        | L   | 0.532      | -            | -                | -                | -         |    -8.11 | cadiaN, device, jabbi, Staehr, stavn |
|           16 |     1603 | 2024-10-08 | Falcons           | L   | 0.526      | -            | -                | -                | -         |    -1.26 | cadiaN, device, jabbi, Staehr, stavn |
|           15 |     1627 | 2024-10-07 | Eternal Fire      | W   | 0.519      | 0.624        | 0.333 (0.108)    | 0.330 (0.107)    | 1 (0.519) |    10.73 | cadiaN, device, jabbi, Staehr, stavn |
|           14 |     2017 | 2024-09-26 | Spirit            | L   | 0.446      | -            | -                | -                | -         |    -0.30 | cadiaN, device, jabbi, Staehr, stavn |
|           13 |     2076 | 2024-09-25 | Vitality          | L   | 0.439      | -            | -                | -                | -         |    -0.77 | cadiaN, device, jabbi, Staehr, stavn |
|           12 |     2413 | 2024-09-14 | Complexity        | L   | 0.366      | -            | -                | -                | -         |    -5.15 | br0, device, jabbi, Staehr, stavn    |
|           11 |     2455 | 2024-09-13 | Rooster           | W   | 0.358      | 0.889        | 0.013 (0.004)    | 0.129 (0.041)    | 1 (0.358) |     0.36 | br0, device, jabbi, Staehr, stavn    |
|           10 |     2516 | 2024-09-11 | Complexity        | L   | 0.346      | -            | -                | -                | -         |    -5.10 | br0, device, jabbi, Staehr, stavn    |
|            9 |     2552 | 2024-09-10 | fnatic            | L   | 0.338      | -            | -                | -                | -         |    -7.58 | br0, device, jabbi, Staehr, stavn    |
|            8 |     3522 | 2024-08-12 | G2                | L   | 0.146      | -            | -                | -                | -         |    -0.10 | br0, device, jabbi, Staehr, stavn    |
|            7 |     3556 | 2024-08-11 | Natus Vincere     | L   | 0.138      | -            | -                | -                | -         |    -0.35 | br0, device, jabbi, Staehr, stavn    |
|            6 |     3575 | 2024-08-10 | 9z                | W   | 0.132      | 1.000        | 0.058 (0.008)    | 0.189 (0.025)    | 1 (0.132) |     0.60 | br0, device, jabbi, Staehr, stavn    |
|            5 |     3785 | 2024-08-04 | Ninjas in Pyjamas | W   | 0.091      | 0.581        | 0.079 (0.004)    | 0.250 (0.013)    | 1 (0.091) |     0.70 | br0, device, jabbi, Staehr, stavn    |
|            4 |     3814 | 2024-08-03 | Vitality          | L   | 0.085      | -            | -                | -                | -         |    -0.17 | br0, device, jabbi, Staehr, stavn    |
|            3 |     3855 | 2024-08-02 | Falcons           | W   | 0.078      | 0.581        | 0.083 (0.004)    | 0.152 (0.007)    | 1 (0.078) |     0.32 | br0, device, jabbi, Staehr, stavn    |
|            2 |     3980 | 2024-07-30 | Vitality          | L   | 0.059      | -            | -                | -                | -         |    -0.11 | br0, device, jabbi, Staehr, stavn    |
|            1 |     4008 | 2024-07-29 | Falcons           | W   | 0.053      | -            | -                | -                | 1 (0.053) |     0.21 | br0, device, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($73,793.92)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.697 | $85,000.00     | $59,269.75      |
| 2024-10-13 |      0.560 | $5,000.00      | $2,799.09       |
| 2024-09-29 |      0.466 | $10,000.00     | $4,657.15       |
| 2024-09-22 |      0.420 | $7,000.00      | $2,938.11       |
| 2024-08-18 |      0.186 | $16,000.00     | $2,981.17       |
| 2024-08-04 |      0.092 | $12,500.00     | $1,148.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
