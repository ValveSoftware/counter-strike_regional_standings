### Roster Details<br />
Team Name: Liquid<br />
Roster: jks, NAF, Twistzz, ultimate, YEKINDAR<br />
Global Rank: [7](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [7]( ../../standings_europe_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [1]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  1663.5<br />
<br />
Final Rank Value (1663.5) = Starting Rank Value (1635.8) + Head To Head Adjustments (27.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.721[<sup>1</sup>](#table2)
- Bounty Collected: 0.667[<sup>2</sup>](#table1)
- Opponent Network: 0.251[<sup>2</sup>](#table1)
- LAN Wins: 0.944[<sup>2</sup>](#table1)

The average of these factors is 0.646<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1635.8
- 400 + ( ( 0.646 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 1635.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      185 | 2024-09-27 | FaZe          | L   | 1.000      | -            | -                | -                | -         |   -17.19 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           43 |      219 | 2024-09-26 | Vitality      | L   | 1.000      | -            | -                | -                | -         |    -7.54 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           42 |      279 | 2024-09-25 | Spirit        | W   | 1.000      | 0.729        | 1.000 (0.729)    | 0.508 (0.371)    | 1 (1.000) |    23.63 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           41 |      445 | 2024-09-20 | G2            | L   | 1.000      | -            | -                | -                | -         |    -6.01 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           40 |      516 | 2024-09-18 | Complexity    | W   | 1.000      | 0.889        | 0.307 (0.273)    | 0.366 (0.326)    | 1 (1.000) |    12.00 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           39 |      590 | 2024-09-15 | Vitality      | L   | 1.000      | -            | -                | -                | -         |    -6.49 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           38 |      707 | 2024-09-12 | Virtus.pro    | W   | 1.000      | 0.889        | 0.434 (0.386)    | 0.269 (0.239)    | 1 (1.000) |     8.50 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           37 |      761 | 2024-09-10 | ENCE          | W   | 1.000      | 0.889        | 0.096 (0.085)    | 0.229 (0.203)    | 1 (1.000) |     0.83 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           36 |     1005 | 2024-09-01 | Legacy        | W   | 0.995      | -            | -                | -                | -         |     0.99 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           35 |     1007 | 2024-09-01 | FLUFFY AIMERS | W   | 0.994      | -            | -                | -                | -         |     0.24 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           34 |     1023 | 2024-08-31 | Legacy        | L   | 0.989      | -            | -                | -                | -         |   -30.32 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           33 |     1026 | 2024-08-31 | FLUFFY AIMERS | W   | 0.987      | -            | -                | -                | -         |     0.19 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           32 |     1686 | 2024-08-13 | FaZe          | L   | 0.867      | -            | -                | -                | -         |   -14.44 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           31 |     1700 | 2024-08-13 | Complexity    | W   | 0.865      | 1.000        | 0.307 (0.265)    | 0.366 (0.317)    | 1 (0.865) |     9.23 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           30 |     1751 | 2024-08-12 | FURIA         | W   | 0.858      | 1.000        | 0.289 (0.248)    | 0.472 (0.405)    | 1 (0.858) |     9.57 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           29 |     1795 | 2024-08-10 | FaZe          | L   | 0.845      | -            | -                | -                | -         |   -14.42 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           28 |     1841 | 2024-08-08 | FURIA         | W   | 0.832      | -            | -                | -                | 1 (0.832) |     9.37 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           27 |     1870 | 2024-08-07 | paiN          | W   | 0.827      | 0.143        | -                | 0.839 (0.099)    | 1 (0.827) |     6.64 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           26 |     2016 | 2024-08-03 | Natus Vincere | W   | 0.801      | 0.581        | 1.000 (0.465)    | 0.460 (0.214)    | 1 (0.801) |    21.15 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           25 |     2095 | 2024-08-01 | Natus Vincere | W   | 0.786      | 0.581        | 1.000 (0.457)    | 0.460 (0.210)    | 1 (0.786) |    21.51 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           24 |     2141 | 2024-07-31 | Virtus.pro    | W   | 0.780      | 0.581        | 0.434 (0.197)    | 0.269 (0.122)    | -         |     9.92 | jks, NAF, Twistzz, ultimate, YEKINDAR  |
|           23 |     3656 | 2024-05-29 | G2            | L   | 0.362      | -            | -                | -                | -         |    -1.73 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           22 |     3682 | 2024-05-28 | Falcons       | W   | 0.355      | -            | -                | -                | -         |     2.80 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           21 |     3700 | 2024-05-27 | 9z            | L   | 0.349      | -            | -                | -                | -         |    -9.47 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           20 |     3713 | 2024-05-27 | Complexity    | W   | 0.346      | -            | -                | -                | -         |     5.38 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           19 |     3782 | 2024-05-23 | Eternal Fire  | L   | 0.319      | -            | -                | -                | -         |    -2.13 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           18 |     3828 | 2024-05-22 | Astralis      | W   | 0.311      | 0.769        | 0.279 (0.067)    | -                | -         |     2.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           17 |     3875 | 2024-05-21 | ENCE          | W   | 0.304      | -            | -                | -                | -         |     0.46 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           16 |     3931 | 2024-05-19 | AMKAL         | W   | 0.292      | -            | -                | -                | -         |     0.38 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           15 |     3945 | 2024-05-18 | OG            | W   | 0.287      | -            | -                | -                | -         |     0.14 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           14 |     4236 | 2024-05-10 | Astralis      | L   | 0.232      | -            | -                | -                | -         |    -5.93 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           13 |     4279 | 2024-05-08 | FlyQuest      | W   | 0.219      | -            | -                | -                | -         |     0.14 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           12 |     4347 | 2024-05-04 | MOUZ          | L   | 0.193      | -            | -                | -                | -         |    -1.71 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           11 |     4407 | 2024-05-01 | Monte         | W   | 0.173      | -            | -                | -                | -         |     0.07 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|           10 |     4432 | 2024-04-30 | FURIA         | W   | 0.167      | -            | -                | -                | -         |     2.48 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            9 |     4675 | 2024-04-19 | M80           | L   | 0.095      | -            | -                | -                | -         |    -2.64 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            8 |     4725 | 2024-04-18 | M80           | W   | 0.089      | -            | -                | -                | -         |     0.34 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            7 |     4729 | 2024-04-18 | Legacy        | W   | 0.087      | -            | -                | -                | -         |     0.05 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            6 |     4777 | 2024-04-17 | Akimbo        | W   | 0.081      | -            | -                | -                | -         |     0.02 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            5 |     4780 | 2024-04-17 | straykids     | W   | 0.081      | -            | -                | -                | -         |     0.01 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            4 |     4892 | 2024-04-12 | FaZe          | L   | 0.045      | -            | -                | -                | -         |    -0.62 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            3 |     4975 | 2024-04-10 | MOUZ          | L   | 0.031      | -            | -                | -                | -         |    -0.27 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            2 |     5055 | 2024-04-08 | G2            | W   | 0.018      | -            | -                | -                | -         |     0.47 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |
|            1 |     5066 | 2024-04-07 | HEROIC        | W   | 0.016      | -            | -                | -                | -         |     0.10 | cadiaN, NAF, skullz, Twistzz, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($134,437.72)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-09-22 |      1.000 | $32,000.00     | $32,000.00      |
| 2024-08-18 |      0.900 | $24,000.00     | $21,599.99      |
| 2024-08-04 |      0.806 | $22,500.00     | $18,125.27      |
| 2024-06-02 |      0.387 | $6,000.00      | $2,322.38       |
| 2024-05-23 |      0.319 | $100,000.00    | $31,942.82      |
| 2024-05-12 |      0.246 | $32,000.00     | $7,869.32       |
| 2024-04-14 |      0.058 | $10,000.00     | $577.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
