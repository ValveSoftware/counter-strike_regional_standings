### Roster Details<br />
Team Name: ATOX<br />
Roster: AccuracyTG, dobu, kabal, MiQ, Zesta<br />
Global Rank: [52](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [11]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  956.7<br />
<br />
Final Rank Value (956.7) = Starting Rank Value (812.8) + Head To Head Adjustments (144.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.366[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.148[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 812.8
- 400 + ( ( 0.228 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 812.8


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
|           25 |     1598 | 2025-02-27 | HOTU              | W   | 0.752      | -            | -                | -                | 0 (0.000) |     5.17 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           24 |     1603 | 2025-02-27 | Eruption          | W   | 0.751      | -            | -                | -                | 0 (0.000) |    14.48 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           23 |     1642 | 2025-02-25 | The Huns          | W   | 0.743      | 0.143        | 0.053 (0.006)    | 0.714 (0.076)    | 0 (0.000) |    17.17 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           22 |     1667 | 2025-02-24 | Gods Reign        | W   | 0.736      | -            | -                | -                | 0 (0.000) |     7.52 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           21 |     1689 | 2025-02-23 | HOTU              | L   | 0.730      | -            | -                | -                | -         |   -17.89 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           20 |     1935 | 2025-02-13 | The Huns          | W   | 0.659      | 0.143        | 0.053 (0.005)    | 0.714 (0.067)    | 0 (0.000) |    15.61 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           19 |     1940 | 2025-02-12 | Rare Atom         | W   | 0.657      | 0.143        | 0.065 (0.006)    | 0.975 (0.091)    | 0 (0.000) |    18.23 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           18 |     1953 | 2025-02-12 | Lynn Vision       | L   | 0.653      | -            | -                | -                | -         |    -8.03 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           17 |     1975 | 2025-02-11 | The Huns          | W   | 0.647      | 0.143        | 0.053 (0.005)    | 0.714 (0.066)    | -         |    16.07 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           16 |     1985 | 2025-02-11 | TYLOO             | W   | 0.645      | 0.143        | 0.043 (0.004)    | 0.877 (0.081)    | -         |    14.26 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           15 |     1988 | 2025-02-10 | Rooster           | W   | 0.644      | -            | -                | -                | -         |    10.52 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           14 |     2453 | 2024-12-29 | Eruption          | W   | 0.352      | 0.384        | 0.027 (0.004)    | 0.417 (0.056)    | 1 (0.352) |     7.96 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           13 |     2454 | 2024-12-28 | Rare Atom         | W   | 0.351      | 0.384        | 0.065 (0.009)    | 0.975 (0.131)    | 1 (0.351) |    10.31 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           12 |     2460 | 2024-12-28 | The Huns          | W   | 0.345      | 0.384        | 0.053 (0.007)    | 0.714 (0.095)    | 1 (0.345) |     9.22 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           11 |     2461 | 2024-12-28 | Chinggis Warriors | W   | 0.344      | 0.384        | 0.067 (0.009)    | 1.000 (0.132)    | 1 (0.344) |    10.11 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|           10 |     2468 | 2024-12-27 | Eruption          | L   | 0.338      | -            | -                | -                | -         |    -2.78 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            9 |     2750 | 2024-12-06 | Chinggis Warriors | W   | 0.200      | 0.333        | 0.067 (0.004)    | 1.000 (0.067)    | -         |     5.91 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            8 |     2758 | 2024-12-06 | DogEvil           | W   | 0.198      | -            | -                | -                | -         |     1.33 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            7 |     2810 | 2024-12-04 | Just Swing        | W   | 0.185      | -            | -                | -                | -         |     2.90 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            6 |     2812 | 2024-12-04 | NomadS            | W   | 0.185      | -            | -                | -                | -         |     3.77 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            5 |     2815 | 2024-12-03 | IHC               | L   | 0.184      | -            | -                | -                | -         |    -3.84 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            4 |     3025 | 2024-11-23 | Just Swing        | W   | 0.112      | -            | -                | -                | -         |     1.77 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            3 |     3029 | 2024-11-22 | CatEvil           | W   | 0.111      | -            | -                | -                | -         |     0.51 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            2 |     3099 | 2024-11-20 | IHC               | W   | 0.091      | -            | -                | -                | -         |     0.97 | AccuracyTG, dobu, kabal, MiQ, Zesta |
|            1 |     3100 | 2024-11-19 | Chinggis Warriors | W   | 0.091      | -            | -                | -                | -         |     2.71 | AccuracyTG, dobu, kabal, MiQ, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,734.27)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.352 | $12,500.00     | $4,397.59       |
| 2024-12-06 |      0.200 | $7,500.00      | $1,498.77       |
| 2024-11-23 |      0.112 | $7,500.00      | $837.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
