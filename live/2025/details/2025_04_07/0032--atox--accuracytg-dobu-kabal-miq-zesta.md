### Roster Details<br />
Team Name: ATOX<br />
Roster: AccuracyTG, dobu, kabal, MiQ, Zesta<br />
Global Rank: [32](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [5]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  1006.0<br />
<br />
Final Rank Value (1006.0) = Starting Rank Value (883.3) + Head To Head Adjustments (122.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.423[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.228[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 883.3
- 400 + ( ( 0.262 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 883.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      956 | 2025-02-27 | HOTU              | W   | 0.939      | -            | -                | -                | 0 (0.000) |     5.40 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           24 |      961 | 2025-02-27 | Eruption          | W   | 0.938      | 0.143        | 0.021 (0.003)    | 0.447 (0.060)    | 0 (0.000) |    12.96 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           23 |      984 | 2025-02-25 | The Huns          | W   | 0.930      | 0.143        | 0.064 (0.009)    | 0.479 (0.064)    | 0 (0.000) |    16.34 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           22 |     1003 | 2025-02-24 | Gods Reign        | W   | 0.923      | -            | -                | -                | 0 (0.000) |     8.16 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           21 |     1025 | 2025-02-23 | HOTU              | L   | 0.917      | -            | -                | -                | -         |   -23.28 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           20 |     1249 | 2025-02-13 | The Huns          | W   | 0.846      | 0.143        | 0.064 (0.008)    | 0.479 (0.058)    | 0 (0.000) |    15.83 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           19 |     1254 | 2025-02-12 | Rare Atom         | W   | 0.844      | 0.143        | -                | 0.707 (0.085)    | 0 (0.000) |    15.88 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           18 |     1267 | 2025-02-12 | Lynn Vision       | L   | 0.840      | -            | -                | -                | -         |   -17.53 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           17 |     1289 | 2025-02-11 | The Huns          | W   | 0.834      | 0.143        | 0.064 (0.008)    | -                | -         |    16.92 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           16 |     1299 | 2025-02-11 | TYLOO             | W   | 0.832      | 0.143        | 0.040 (0.005)    | -                | -         |    12.47 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           15 |     1302 | 2025-02-10 | Rooster           | W   | 0.831      | -            | -                | -                | -         |     9.71 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           14 |     1701 | 2024-12-29 | Eruption          | W   | 0.539      | 0.384        | 0.021 (0.004)    | 0.447 (0.093)    | 1 (0.539) |     9.57 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           13 |     1702 | 2024-12-28 | Rare Atom         | W   | 0.538      | 0.384        | 0.019 (0.004)    | 0.707 (0.146)    | 1 (0.538) |    11.08 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           12 |     1708 | 2024-12-28 | The Huns          | W   | 0.532      | 0.384        | 0.064 (0.013)    | 0.479 (0.098)    | 1 (0.532) |    12.13 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           11 |     1709 | 2024-12-28 | Chinggis Warriors | W   | 0.531      | 0.384        | 0.029 (0.006)    | 0.545 (0.111)    | 1 (0.531) |     8.48 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           10 |     1716 | 2024-12-27 | Eruption          | L   | 0.525      | -            | -                | -                | -         |    -6.83 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            9 |     1998 | 2024-12-06 | Chinggis Warriors | W   | 0.387      | 0.333        | 0.029 (0.004)    | 0.545 (0.070)    | -         |     6.39 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            8 |     2006 | 2024-12-06 | DogEvil           | W   | 0.385      | 0.333        | -                | 0.591 (0.076)    | -         |     1.92 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            7 |     2058 | 2024-12-04 | Just Swing        | W   | 0.372      | -            | -                | -                | -         |     2.56 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            6 |     2060 | 2024-12-04 | NomadS            | W   | 0.372      | -            | -                | -                | -         |     2.31 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            5 |     2063 | 2024-12-03 | IHC               | L   | 0.371      | -            | -                | -                | -         |    -8.36 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            4 |     2273 | 2024-11-23 | Just Swing        | W   | 0.299      | -            | -                | -                | -         |     2.03 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            3 |     2277 | 2024-11-22 | CatEvil           | W   | 0.297      | -            | -                | -                | -         |     1.02 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            2 |     2347 | 2024-11-20 | IHC               | W   | 0.278      | -            | -                | -                | -         |     2.50 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            1 |     2348 | 2024-11-19 | Chinggis Warriors | W   | 0.277      | -            | -                | -                | -         |     5.04 | AccuracyTG, dobu, kabal, MiQ, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,870.71)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.539 | $12,500.00     | $6,732.34       |
| 2024-12-06 |      0.387 | $7,500.00      | $2,899.62       |
| 2024-11-23 |      0.299 | $7,500.00      | $2,238.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
