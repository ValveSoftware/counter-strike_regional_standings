### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [89](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_03.md)<br />
Regional Rank: [22]( ../../standings_americas_2025_02_03.md)<br />
<br />
Final Rank Value:  869.4<br />
<br />
Final Rank Value (869.4) = Starting Rank Value (895.8) + Head To Head Adjustments (-26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.307[<sup>2</sup>](#table1)

The average of these factors is 0.256<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 895.8
- 400 + ( ( 0.256 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 895.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      526 | 2024-12-14 | Party Astronauts   | L   | 0.862      | -            | -                | -                | -         |   -12.80 | brett, den1ed, jason, slump, Wolffe      |
|           42 |      626 | 2024-12-08 | BOSS               | L   | 0.820      | -            | -                | -                | -         |    -7.26 | brett, jason, nooz, slump, Wolffe        |
|           41 |      640 | 2024-12-07 | Party Astronauts   | W   | 0.816      | 0.384        | 0.022 (0.007)    | 0.637 (0.200)    | 1 (0.816) |    13.51 | brett, jason, nooz, slump, Wolffe        |
|           40 |      647 | 2024-12-07 | Bad News Capybaras | W   | 0.815      | 0.384        | 0.002 (0.001)    | 0.354 (0.111)    | 1 (0.815) |     8.88 | brett, jason, nooz, slump, Wolffe        |
|           39 |      661 | 2024-12-07 | What’s for dinner  | W   | 0.813      | -            | -                | -                | 1 (0.813) |     1.64 | brett, jason, nooz, slump, Wolffe        |
|           38 |      674 | 2024-12-06 | ROOMBA PEEK        | L   | 0.810      | -            | -                | -                | -         |   -21.57 | brett, jason, nooz, slump, Wolffe        |
|           37 |     1790 | 2024-10-15 | BOSS               | L   | 0.462      | -            | -                | -                | -         |    -3.88 | ayy, brett, jason, nooz, slump           |
|           36 |     1811 | 2024-10-13 | Fisher College     | L   | 0.448      | -            | -                | -                | -         |    -8.35 | brett, jason, nooz, slump, Wolffe        |
|           35 |     1812 | 2024-10-13 | InControl          | W   | 0.448      | 0.262        | 0.006 (0.001)    | -                | 0 (0.000) |     2.46 | brett, jason, nooz, slump, Wolffe        |
|           34 |     1826 | 2024-10-12 | Final Form         | W   | 0.442      | -            | -                | -                | 0 (0.000) |     1.58 | brett, jason, nooz, slump, Wolffe        |
|           33 |     1876 | 2024-10-09 | Chill Guys         | L   | 0.422      | -            | -                | -                | -         |    -9.29 | ayy, brett, jason, nooz, slump           |
|           32 |     1881 | 2024-10-09 | Chill Guys         | L   | 0.422      | -            | -                | -                | -         |    -9.57 | ayy, brett, jason, nooz, slump           |
|           31 |     1909 | 2024-10-08 | timbermen          | L   | 0.416      | -            | -                | -                | -         |   -10.37 | ayy, brett, jason, nooz, slump           |
|           30 |     1914 | 2024-10-08 | timbermen          | W   | 0.415      | 0.477        | 0.007 (0.001)    | 0.096 (0.019)    | 0 (0.000) |     2.72 | ayy, brett, jason, nooz, slump           |
|           29 |     1945 | 2024-10-07 | BOSS               | L   | 0.409      | -            | -                | -                | -         |    -4.03 | ayy, brett, jason, nooz, slump           |
|           28 |     1947 | 2024-10-07 | BOSS               | W   | 0.409      | 0.477        | 0.040 (0.008)    | 0.694 (0.135)    | 0 (0.000) |     9.05 | ayy, brett, jason, nooz, slump           |
|           27 |     2001 | 2024-10-05 | BOSS               | L   | 0.396      | -            | -                | -                | -         |    -3.74 | brett, jason, nooz, slump, Wolffe        |
|           26 |     2003 | 2024-10-05 | Legacy             | W   | 0.395      | 0.371        | 0.079 (0.012)    | 0.487 (0.071)    | 0 (0.000) |     8.40 | brett, consti, jason, slump, Wolffe      |
|           25 |     2037 | 2024-10-04 | timbermen          | W   | 0.388      | 0.371        | 0.007 (0.001)    | -                | 0 (0.000) |     2.71 | brett, jason, nooz, slump, Wolffe        |
|           24 |     2143 | 2024-10-01 | Chill Guys         | W   | 0.369      | 0.371        | 0.004 (0.001)    | 0.289 (0.040)    | 0 (0.000) |     3.34 | ayy, brett, jason, nooz, slump           |
|           23 |     2471 | 2024-09-23 | LAG                | W   | 0.316      | 0.477        | 0.004 (0.001)    | 0.121 (0.018)    | -         |     2.41 | ayy, brett, jason, nooz, slump           |
|           22 |     2474 | 2024-09-23 | LAG                | W   | 0.315      | -            | -                | -                | -         |     2.46 | ayy, brett, jason, nooz, slump           |
|           21 |     2514 | 2024-09-22 | NRG                | L   | 0.308      | -            | -                | -                | -         |    -1.56 | brett, C4LLM3SU3, jason, nooz, slump     |
|           20 |     2537 | 2024-09-21 | Legacy             | W   | 0.302      | 0.303        | 0.079 (0.007)    | 0.487 (0.044)    | -         |     5.71 | ayy, brett, jason, nooz, slump           |
|           19 |     3034 | 2024-09-04 | Bad News Capybaras | W   | 0.189      | 0.477        | -                | 0.354 (0.032)    | -         |     2.10 | ayy, brett, jason, nooz, slump           |
|           18 |     3038 | 2024-09-04 | Bad News Capybaras | W   | 0.189      | 0.477        | -                | 0.354 (0.032)    | -         |     2.13 | ayy, brett, jason, nooz, slump           |
|           17 |     3124 | 2024-09-01 | Liquid             | L   | 0.168      | -            | -                | -                | -         |    -0.09 | brett, jason, MarKE, nooz, slump         |
|           16 |     3141 | 2024-08-31 | LAG                | W   | 0.162      | -            | -                | -                | -         |     0.60 | brett, jason, MarKE, nooz, slump         |
|           15 |     3143 | 2024-08-31 | Liquid             | L   | 0.161      | -            | -                | -                | -         |    -0.08 | brett, jason, MarKE, nooz, slump         |
|           14 |     3232 | 2024-08-28 | Legacy             | L   | 0.142      | -            | -                | -                | -         |    -1.91 | brett, jason, MarKE, nooz, slump         |
|           13 |     3238 | 2024-08-28 | E-Xolos LAZER      | W   | 0.141      | -            | -                | -                | -         |     1.08 | brett, jason, MarKE, nooz, slump         |
|           12 |     3297 | 2024-08-27 | Party Astronauts   | W   | 0.135      | -            | -                | -                | -         |     1.00 | brett, jason, MarKE, nooz, slump         |
|           11 |     3348 | 2024-08-26 | USA                | W   | 0.129      | -            | -                | -                | -         |     0.36 | brett, jason, MarKE, nooz, slump         |
|           10 |     3372 | 2024-08-26 | Nouns              | L   | 0.127      | -            | -                | -                | -         |    -1.12 | brett, jason, MarKE, nooz, slump         |
|            9 |     3632 | 2024-08-19 | Priority           | W   | 0.082      | -            | -                | -                | -         |     0.23 | brett, jason, MarKE, nooz, slump         |
|            8 |     3633 | 2024-08-19 | Party Astronauts   | L   | 0.082      | -            | -                | -                | -         |    -1.98 | brett, jason, MarKE, nooz, slump         |
|            7 |     3635 | 2024-08-19 | Marsborne          | W   | 0.081      | -            | -                | -                | -         |     0.76 | brett, jason, MarKE, nooz, slump         |
|            6 |     3785 | 2024-08-13 | Limitless          | L   | 0.042      | -            | -                | -                | -         |    -1.09 | bezymecc, brett, jason, sacrifice, slump |
|            5 |     3788 | 2024-08-13 | Limitless          | W   | 0.042      | -            | -                | -                | -         |     0.24 | bezymecc, brett, jason, sacrifice, slump |
|            4 |     3793 | 2024-08-13 | Wildcard           | L   | 0.041      | -            | -                | -                | -         |    -0.09 | bezymecc, brett, jason, sacrifice, slump |
|            3 |     3797 | 2024-08-13 | Wildcard           | L   | 0.041      | -            | -                | -                | -         |    -0.09 | bezymecc, brett, jason, sacrifice, slump |
|            2 |     3834 | 2024-08-12 | BOSS               | L   | 0.036      | -            | -                | -                | -         |    -0.96 | bezymecc, brett, jason, sacrifice, slump |
|            1 |     3948 | 2024-08-08 | Final Form         | W   | 0.008      | -            | -                | -                | -         |     0.03 | bezymecc, brett, jason, sacrifice, slump |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,775.99)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.495 | $2,000.00      | $990.60         |
| 2024-10-13 |      0.448 | $450.00        | $201.82         |
| 2024-10-05 |      0.396 | $4,000.00      | $1,583.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
