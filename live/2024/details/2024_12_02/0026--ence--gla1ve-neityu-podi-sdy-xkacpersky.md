### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, Neityu, podi, sdy, xKacpersky<br />
Global Rank: [26](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [20]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1301.5<br />
<br />
Final Rank Value (1301.5) = Starting Rank Value (1343.7) + Head To Head Adjustments (-42.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.657[<sup>1</sup>](#table2)
- Bounty Collected: 0.506[<sup>2</sup>](#table1)
- Opponent Network: 0.199[<sup>2</sup>](#table1)
- LAN Wins: 0.519[<sup>2</sup>](#table1)

The average of these factors is 0.470<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1343.7
- 400 + ( ( 0.470 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1343.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      145 | 2024-11-24 | Monte           | W   | 1.000      | 0.354        | 0.053 (0.019)    | 0.743 (0.263)    | -         |    10.26 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           31 |      167 | 2024-11-23 | Zero Tenacity   | W   | 1.000      | 0.354        | 0.082 (0.029)    | 0.724 (0.256)    | -         |     8.88 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           30 |      482 | 2024-11-11 | 500             | L   | 1.000      | -            | -                | -                | -         |   -22.92 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           29 |      522 | 2024-11-09 | Into the Breach | W   | 1.000      | 0.354        | -                | 0.639 (0.226)    | -         |     5.32 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           28 |      874 | 2024-10-20 | HEROIC          | W   | 0.914      | 0.589        | 0.628 (0.338)    | 0.552 (0.297)    | 1 (0.914) |    25.84 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           27 |      908 | 2024-10-19 | The MongolZ     | W   | 0.907      | 0.589        | 1.000 (0.534)    | 0.686 (0.366)    | 1 (0.907) |    26.86 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           26 |      938 | 2024-10-18 | 9z              | W   | 0.901      | 0.589        | 0.084 (0.045)    | 0.269 (0.142)    | 1 (0.901) |    11.12 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           25 |      963 | 2024-10-17 | HEROIC          | L   | 0.893      | -            | -                | -                | -         |    -2.19 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           24 |      971 | 2024-10-17 | 9z              | W   | 0.892      | 0.589        | 0.084 (0.044)    | 0.269 (0.141)    | 1 (0.892) |    11.52 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           23 |     1999 | 2024-09-13 | ATOX            | L   | 0.667      | -            | -                | -                | -         |   -17.94 | gla1ve, Goofy, Kylar, podi, sdy       |
|           22 |     2034 | 2024-09-12 | RED Canids      | L   | 0.660      | -            | -                | -                | -         |   -11.74 | gla1ve, Goofy, Kylar, podi, sdy       |
|           21 |     2098 | 2024-09-10 | Liquid          | L   | 0.647      | -            | -                | -                | -         |    -2.77 | gla1ve, Goofy, Kylar, podi, sdy       |
|           20 |     2381 | 2024-08-30 | Young Ninjas    | L   | 0.574      | -            | -                | -                | -         |   -16.73 | gla1ve, Goofy, Kylar, podi, sdy       |
|           19 |     2716 | 2024-08-23 | Monte           | L   | 0.525      | -            | -                | -                | -         |   -12.94 | gla1ve, Goofy, Kylar, podi, sdy       |
|           18 |     2733 | 2024-08-22 | ex-Enterprise   | W   | 0.520      | -            | -                | -                | -         |     2.28 | gla1ve, Goofy, Kylar, podi, sdy       |
|           17 |     2771 | 2024-08-21 | UNiTY           | L   | 0.514      | -            | -                | -                | -         |   -13.11 | gla1ve, Goofy, Kylar, podi, sdy       |
|           16 |     2823 | 2024-08-21 | KOI             | L   | 0.512      | -            | -                | -                | -         |   -14.61 | gla1ve, Goofy, Kylar, podi, sdy       |
|           15 |     2867 | 2024-08-19 | kONO            | L   | 0.500      | -            | -                | -                | -         |   -14.15 | gla1ve, Goofy, Kylar, podi, sdy       |
|           14 |     3297 | 2024-08-05 | PARIVISION      | L   | 0.406      | -            | -                | -                | -         |   -10.92 | gla1ve, Goofy, Kylar, podi, sdy       |
|           13 |     3318 | 2024-08-04 | 9INE            | W   | 0.401      | 0.435        | 0.056 (0.010)    | 0.743 (0.130)    | -         |     1.48 | gla1ve, Goofy, Kylar, podi, sdy       |
|           12 |     3622 | 2024-07-27 | 3DMAX           | L   | 0.347      | -            | -                | -                | -         |    -2.69 | gla1ve, Goofy, Kylar, podi, sdy       |
|           11 |     3651 | 2024-07-26 | True Rippers    | W   | 0.339      | -            | -                | -                | 1 (0.339) |     0.18 | gla1ve, Goofy, Kylar, podi, sdy       |
|           10 |     3690 | 2024-07-25 | PARIVISION      | W   | 0.333      | 0.650        | 0.029 (0.006)    | 0.421 (0.091)    | 1 (0.333) |     1.47 | gla1ve, Goofy, Kylar, podi, sdy       |
|            9 |     3699 | 2024-07-25 | Aurora          | L   | 0.331      | -            | -                | -                | -         |    -8.27 | gla1ve, Goofy, Kylar, podi, sdy       |
|            8 |     3721 | 2024-07-24 | The MongolZ     | L   | 0.327      | -            | -                | -                | -         |    -0.60 | gla1ve, Goofy, Kylar, podi, sdy       |
|            7 |     3731 | 2024-07-24 | UNPAID          | W   | 0.325      | 0.650        | 0.132 (0.028)    | 0.344 (0.073)    | 1 (0.325) |     3.14 | gla1ve, Goofy, Kylar, podi, sdy       |
|            6 |     4331 | 2024-06-16 | Falcons         | L   | 0.072      | -            | -                | -                | -         |    -1.65 | gla1ve, Goofy, Kylar, podi, sdy       |
|            5 |     4400 | 2024-06-14 | Complexity      | W   | 0.060      | -            | -                | -                | 1 (0.060) |     1.33 | gla1ve, Goofy, Kylar, podi, sdy       |
|            4 |     4407 | 2024-06-14 | MIBR            | W   | 0.059      | 0.500        | 0.141 (0.004)    | -                | 1 (0.059) |     1.32 | gla1ve, Goofy, Kylar, podi, sdy       |
|            3 |     4742 | 2024-06-06 | HEROIC          | L   | 0.007      | -            | -                | -                | -         |    -0.02 | gla1ve, Goofy, Kylar, podi, sdy       |
|            2 |     4755 | 2024-06-06 | Astralis        | L   | 0.006      | -            | -                | -                | -         |    -0.05 | gla1ve, Goofy, Kylar, podi, sdy       |
|            1 |     4792 | 2024-06-05 | Sashi           | W   | 0.001      | -            | -                | -                | 1 (0.001) |     0.00 | gla1ve, Goofy, Kylar, podi, sdy       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($111,053.89)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      1.000 | $9,000.00      | $9,000.00       |
| 2024-11-12 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-10-20 |      0.914 | $100,000.00    | $91,423.55      |
| 2024-09-22 |      0.728 | $3,500.00      | $2,547.69       |
| 2024-08-06 |      0.414 | $2,000.00      | $827.86         |
| 2024-07-28 |      0.354 | $15,000.00     | $5,305.17       |
| 2024-06-16 |      0.073 | $10,000.00     | $732.42         |
| 2024-06-09 |      0.027 | $8,000.00      | $217.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
