### Roster Details<br />
Team Name: Rebels<br />
Roster: casey, Flayy, innocent, kisserek, olimp<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [52](../standings_global.md)<br />
Regional Rank: [38]( ../standings_europe.md)<br />
Final Rank Value:  1071.8<br />
<br />
Final Rank Value (1071.8) = Starting Rank Value (1076.9) + Head To Head Adjustments (-5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.440[<sup>1</sup>](#table2)
- Bounty Collected: 0.434[<sup>2</sup>](#table1)
- Opponent Network: 0.221[<sup>2</sup>](#table1)
- LAN Wins: 0.189[<sup>2</sup>](#table1)

The average of these factors is 0.321<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1076.9
- 400 + ( ( 0.321 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1076.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |       25 | 2024-07-10 | Belarus           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.76 | casey, Flayy, innocent, kisserek, olimp |
|           45 |       37 | 2024-07-09 | Bulgaria          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.76 | casey, Flayy, innocent, kisserek, olimp |
|           44 |       73 | 2024-07-08 | Verdant           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.46 | casey, Flayy, innocent, kisserek, olimp |
|           43 |      263 | 2024-06-13 | Slovakia          | L   | 1.000      | -            | -                | -                | -         |   -22.87 | casey, Flayy, innocent, kisserek, olimp |
|           42 |      288 | 2024-06-12 | PERA              | L   | 1.000      | -            | -                | -                | -         |   -18.42 | casey, Flayy, innocent, kisserek, olimp |
|           41 |      330 | 2024-06-10 | Permitta          | W   | 0.994      | 0.379        | 0.038 (0.014)    | 0.837 (0.315)    | 0 (0.000) |    10.58 | casey, Flayy, innocent, kisserek, olimp |
|           40 |      369 | 2024-06-09 | Rhyno             | L   | 0.987      | -            | -                | -                | -         |   -17.68 | casey, Flayy, kisserek, olimp, SZPERO   |
|           39 |      494 | 2024-06-07 | BLEED             | W   | 0.974      | 0.500        | 0.348 (0.170)    | 0.908 (0.442)    | 0 (0.000) |    23.05 | casey, Flayy, innocent, kisserek, olimp |
|           38 |      614 | 2024-06-05 | 9INE              | W   | 0.961      | -            | -                | -                | 0 (0.000) |     4.93 | casey, Flayy, innocent, kisserek, olimp |
|           37 |      804 | 2024-05-30 | PERA              | W   | 0.921      | 0.379        | 0.066 (0.023)    | 0.433 (0.151)    | -         |    11.77 | casey, Flayy, innocent, kisserek, olimp |
|           36 |      844 | 2024-05-29 | UNiTY             | L   | 0.912      | -            | -                | -                | -         |   -17.74 | casey, Flayy, innocent, kisserek, olimp |
|           35 |      931 | 2024-05-25 | kONO              | W   | 0.884      | 0.371        | -                | 0.569 (0.186)    | -         |     7.39 | casey, Flayy, innocent, kisserek, olimp |
|           34 |     1045 | 2024-05-21 | UNiTY             | L   | 0.858      | -            | -                | -                | -         |   -15.63 | casey, Flayy, innocent, kisserek, olimp |
|           33 |     1068 | 2024-05-20 | The Prodigies     | W   | 0.854      | -            | -                | -                | -         |     1.18 | casey, Flayy, innocent, kisserek, olimp |
|           32 |     1137 | 2024-05-18 | B8                | L   | 0.838      | -            | -                | -                | -         |    -9.57 | casey, Flayy, innocent, kisserek, olimp |
|           31 |     1167 | 2024-05-17 | Gaimin Gladiators | W   | 0.832      | 0.384        | 0.069 (0.022)    | 0.528 (0.169)    | -         |    15.06 | casey, Flayy, innocent, kisserek, olimp |
|           30 |     1659 | 2024-04-28 | Aurora            | L   | 0.704      | -            | -                | -                | -         |    -1.19 | casey, Flayy, innocent, kisserek, olimp |
|           29 |     1708 | 2024-04-26 | MIBR              | W   | 0.691      | 0.500        | 0.270 (0.093)    | 0.648 (0.224)    | 1 (0.691) |    20.64 | casey, Flayy, innocent, kisserek, olimp |
|           28 |     1710 | 2024-04-25 | Rooster           | W   | 0.690      | -            | -                | -                | 1 (0.690) |     4.93 | casey, Flayy, innocent, kisserek, olimp |
|           27 |     1863 | 2024-04-19 | brazylijski luz   | L   | 0.647      | -            | -                | -                | -         |   -15.80 | casey, Flayy, innocent, kisserek, olimp |
|           26 |     2042 | 2024-04-13 | Monte             | L   | 0.607      | -            | -                | -                | -         |    -5.51 | casey, Flayy, innocent, kisserek, olimp |
|           25 |     2174 | 2024-04-09 | B8                | W   | 0.581      | 0.500        | 0.242 (0.070)    | 1.000 (0.290)    | -         |    10.48 | casey, Flayy, innocent, kisserek, olimp |
|           24 |     2317 | 2024-04-04 | ALTERNATE aTTaX   | W   | 0.547      | 0.500        | 0.050 (0.014)    | 0.577 (0.158)    | -         |     7.26 | casey, Flayy, innocent, kisserek, olimp |
|           23 |     2367 | 2024-04-03 | SINNERS           | L   | 0.538      | -            | -                | -                | -         |    -7.60 | casey, Flayy, innocent, kisserek, olimp |
|           22 |     2450 | 2024-03-28 | ex-Sprout         | W   | 0.500      | -            | -                | -                | -         |     0.82 | casey, Flayy, innocent, kisserek, olimp |
|           21 |     2483 | 2024-03-27 | B8                | L   | 0.494      | -            | -                | -                | -         |    -5.83 | casey, Flayy, innocent, kisserek, olimp |
|           20 |     2493 | 2024-03-27 | Sashi             | W   | 0.493      | 0.143        | 0.202 (0.014)    | -                | -         |     9.00 | casey, Flayy, innocent, kisserek, olimp |
|           19 |     2523 | 2024-03-25 | Aurora            | L   | 0.480      | -            | -                | -                | -         |    -0.58 | casey, Flayy, innocent, kisserek, olimp |
|           18 |     2718 | 2024-03-14 | brazylijski luz   | L   | 0.408      | -            | -                | -                | -         |   -10.45 | casey, Flayy, kisserek, olimp, SZPERO   |
|           17 |     2990 | 2024-03-04 | BLEED             | L   | 0.341      | -            | -                | -                | -         |    -1.78 | casey, Flayy, kisserek, olimp, sNx      |
|           16 |     3024 | 2024-03-03 | Sangal            | W   | 0.333      | 0.500        | 0.231 (0.038)    | 0.853 (0.142)    | -         |     6.25 | casey, Flayy, kisserek, olimp, sNx      |
|           15 |     3036 | 2024-03-02 | Aurora            | L   | 0.327      | -            | -                | -                | -         |    -0.39 | casey, Flayy, kisserek, olimp, sNx      |
|           14 |     3071 | 2024-02-29 | Sangal            | W   | 0.313      | 0.500        | 0.231 (0.036)    | 0.853 (0.134)    | -         |     6.02 | casey, Flayy, kisserek, olimp, sNx      |
|           13 |     3562 | 2024-02-04 | Falcons           | L   | 0.148      | -            | -                | -                | -         |    -0.25 | casey, Flayy, kisserek, olimp, sNx      |
|           12 |     3599 | 2024-02-03 | FaZe              | L   | 0.140      | -            | -                | -                | -         |    -0.04 | casey, Flayy, kisserek, olimp, sNx      |
|           11 |     3621 | 2024-02-02 | M80               | W   | 0.134      | -            | -                | -                | 1 (0.134) |     3.13 | casey, Flayy, kisserek, olimp, sNx      |
|           10 |     3673 | 2024-01-31 | Eternal Fire      | L   | 0.121      | -            | -                | -                | -         |    -0.09 | casey, Flayy, kisserek, olimp, sNx      |
|            9 |     3678 | 2024-01-31 | Cloud9            | W   | 0.120      | -            | -                | -                | 1 (0.120) |     2.71 | casey, Flayy, kisserek, olimp, sNx      |
|            8 |     3718 | 2024-01-28 | 9 Pandas          | L   | 0.100      | -            | -                | -                | -         |    -1.40 | casey, Flayy, kisserek, olimp, sNx      |
|            7 |     3804 | 2024-01-23 | Viperio           | L   | 0.067      | -            | -                | -                | -         |    -2.01 | casey, Flayy, kisserek, olimp, sNx      |
|            6 |     3805 | 2024-01-23 | PERA              | L   | 0.066      | -            | -                | -                | -         |    -1.27 | casey, Flayy, kisserek, olimp, sNx      |
|            5 |     3825 | 2024-01-22 | Slovakia          | L   | 0.060      | -            | -                | -                | -         |    -1.31 | casey, Flayy, kisserek, olimp, sNx      |
|            4 |     3830 | 2024-01-22 | ALTERNATE aTTaX   | W   | 0.060      | -            | -                | -                | -         |     0.93 | casey, Flayy, kisserek, olimp, sNx      |
|            3 |     3834 | 2024-01-22 | ex-Guild Eagles   | L   | 0.060      | -            | -                | -                | -         |    -1.37 | casey, Flayy, kisserek, olimp, sNx      |
|            2 |     4106 | 2024-01-16 | Passion UA        | L   | 0.021      | -            | -                | -                | -         |    -0.38 | casey, Flayy, kisserek, olimp, sNx      |
|            1 |     4116 | 2024-01-16 | Gucci Academy     | W   | 0.021      | -            | -                | -                | -         |     0.01 | casey, Flayy, kisserek, olimp, sNx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,725.94)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      1.000 | $1,089.00      | $1,089.00       |
| 2024-06-09 |      0.987 | $2,000.00      | $1,974.43       |
| 2024-05-18 |      0.840 | $2,000.00      | $1,680.61       |
| 2024-04-28 |      0.705 | $10,000.00     | $7,046.44       |
| 2024-02-11 |      0.194 | $10,000.00     | $1,935.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
