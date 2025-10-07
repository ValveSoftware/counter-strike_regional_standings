### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [6](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [4]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  1809.7<br />
<br />
Final Rank Value (1809.7) = Starting Rank Value (1795.5) + Head To Head Adjustments (14.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.992[<sup>1</sup>](#table2)
- Bounty Collected: 0.770[<sup>2</sup>](#table1)
- Opponent Network: 0.360[<sup>2</sup>](#table1)
- LAN Wins: 0.727[<sup>2</sup>](#table1)

The average of these factors is 0.712<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1795.5
- 400 + ( ( 0.712 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1795.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      930 | 2025-09-06 | Vitality      | L   | 1.000      | -            | -                | -                | -         |   -13.00 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           36 |      948 | 2025-09-05 | M80           | W   | 0.994      | 0.675        | -                | 0.684 (0.459)    | 1 (0.994) |     1.57 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           35 |      993 | 2025-09-01 | FURIA         | L   | 0.967      | -            | -                | -                | -         |   -11.23 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           34 |     1031 | 2025-08-30 | G2            | W   | 0.954      | 0.561        | 0.781 (0.418)    | 0.592 (0.317)    | -         |    14.77 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           33 |     1113 | 2025-08-28 | Imperial      | W   | 0.939      | 0.561        | -                | 0.592 (0.312)    | -         |     2.38 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           32 |     1217 | 2025-08-22 | Falcons       | L   | 0.901      | -            | -                | -                | -         |   -15.51 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           31 |     1245 | 2025-08-21 | Virtus.pro    | W   | 0.893      | 1.000        | -                | 0.281 (0.251)    | 1 (0.893) |     2.68 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           30 |     1382 | 2025-08-16 | Spirit        | L   | 0.860      | -            | -                | -                | -         |   -12.15 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           29 |     1469 | 2025-08-14 | Astralis      | W   | 0.847      | 0.769        | 0.813 (0.529)    | 0.439 (0.286)    | 1 (0.847) |    10.13 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           28 |     1665 | 2025-08-10 | B8            | W   | 0.819      | -            | -                | -                | -         |     3.15 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           27 |     1720 | 2025-08-07 | OG            | W   | 0.800      | 0.624        | -                | 1.000 (0.499)    | -         |     3.03 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           26 |     1761 | 2025-08-03 | Spirit        | L   | 0.774      | -            | -                | -                | -         |   -11.73 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           25 |     1775 | 2025-08-02 | Vitality      | W   | 0.768      | 1.000        | 1.000 (0.768)    | 0.493 (0.379)    | 1 (0.768) |    14.14 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           24 |     1793 | 2025-08-01 | FURIA         | W   | 0.761      | 1.000        | 1.000 (0.761)    | 0.661 (0.503)    | 1 (0.761) |    15.89 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           23 |     1839 | 2025-07-29 | Spirit        | L   | 0.741      | -            | -                | -                | -         |   -11.38 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           22 |     1864 | 2025-07-28 | Natus Vincere | W   | 0.733      | 1.000        | 0.935 (0.685)    | 0.345 (0.253)    | 1 (0.733) |    11.18 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           21 |     1901 | 2025-07-27 | Liquid        | W   | 0.726      | 1.000        | 0.546 (0.396)    | 0.476 (0.346)    | 1 (0.726) |     8.26 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           20 |     2414 | 2025-06-21 | Vitality      | L   | 0.488      | -            | -                | -                | -         |    -6.78 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           19 |     2444 | 2025-06-19 | Spirit        | W   | 0.475      | 1.000        | 1.000 (0.475)    | -                | 1 (0.475) |     7.73 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           18 |     2516 | 2025-06-15 | Legacy        | W   | 0.447      | -            | -                | -                | 1 (0.447) |     1.17 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           17 |     2540 | 2025-06-14 | Aurora        | W   | 0.441      | 1.000        | 1.000 (0.441)    | -                | 1 (0.441) |     6.96 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           16 |     2573 | 2025-06-13 | Liquid        | W   | 0.435      | -            | -                | -                | -         |     5.89 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           15 |     2609 | 2025-06-12 | FaZe          | L   | 0.428      | -            | -                | -                | -         |   -10.41 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           14 |     2624 | 2025-06-12 | Virtus.pro    | L   | 0.427      | -            | -                | -                | -         |   -12.17 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           13 |     2838 | 2025-05-25 | Vitality      | L   | 0.308      | -            | -                | -                | -         |    -4.44 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           12 |     2853 | 2025-05-24 | The MongolZ   | W   | 0.301      | 1.000        | 1.000 (0.301)    | -                | -         |     6.97 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           11 |     2905 | 2025-05-21 | Falcons       | W   | 0.282      | 1.000        | 0.906 (0.255)    | -                | -         |     4.61 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           10 |     2935 | 2025-05-20 | Liquid        | W   | 0.274      | -            | -                | -                | -         |     3.86 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            9 |     2962 | 2025-05-19 | BC.Game       | W   | 0.268      | -            | -                | -                | -         |     0.11 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            8 |     3381 | 2025-05-03 | Falcons       | L   | 0.160      | -            | -                | -                | -         |    -2.41 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            7 |     3402 | 2025-05-02 | FaZe          | W   | 0.153      | -            | -                | -                | -         |     1.08 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            6 |     3423 | 2025-05-01 | Vitality      | L   | 0.146      | -            | -                | -                | -         |    -2.16 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            5 |     3454 | 2025-04-30 | paiN          | W   | 0.139      | -            | -                | -                | -         |     0.77 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            4 |     3565 | 2025-04-26 | Falcons       | L   | 0.111      | -            | -                | -                | -         |    -1.70 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            3 |     3604 | 2025-04-23 | The MongolZ   | W   | 0.091      | -            | -                | -                | -         |     2.14 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            2 |     3623 | 2025-04-21 | GamerLegion   | W   | 0.083      | -            | -                | -                | -         |     0.50 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            1 |     3634 | 2025-04-21 | BIG           | W   | 0.078      | -            | -                | -                | -         |     0.30 | Brollan, Jimpphat, Spinx, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($373,122.31)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.98) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-07 |      1.000 | $40,000.00     | $40,000.00      |
| 2025-08-24 |      0.913 | $40,000.00     | $36,502.94      |
| 2025-08-17 |      0.867 | $28,125.00     | $24,383.49      |
| 2025-08-03 |      0.774 | $216,000.00    | $167,152.28     |
| 2025-06-22 |      0.495 | $80,000.00     | $39,601.20      |
| 2025-05-25 |      0.308 | $150,000.00    | $46,273.47      |
| 2025-05-04 |      0.168 | $40,000.00     | $6,703.28       |
| 2025-04-27 |      0.119 | $105,000.00    | $12,505.65      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
