### Roster Details<br />
Team Name: Falcons<br />
Roster: degster, kyxsan, Magisk, NiKo, TeSeS<br />
Global Rank: [8](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1680.4<br />
<br />
Final Rank Value (1680.4) = Starting Rank Value (1751.8) + Head To Head Adjustments (-71.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.944[<sup>1</sup>](#table2)
- Bounty Collected: 0.650[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.932[<sup>2</sup>](#table1)

The average of these factors is 0.691<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1751.8
- 400 + ( ( 0.691 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1751.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      206 | 2025-01-19 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |   -22.82 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           41 |      220 | 2025-01-15 | ENCE              | W   | 1.000      | -            | -                | -                | -         |     1.48 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           40 |      452 | 2024-12-13 | G2                | L   | 0.897      | -            | -                | -                | -         |    -5.80 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           39 |      520 | 2024-12-08 | Natus Vincere     | W   | 0.864      | 1.000        | 1.000 (0.864)    | 0.623 (0.539)    | 1 (0.864) |    15.25 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           38 |      549 | 2024-12-07 | Spirit            | L   | 0.858      | -            | -                | -                | -         |    -6.14 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           37 |      575 | 2024-12-06 | The MongolZ       | L   | 0.852      | -            | -                | -                | -         |    -8.64 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           36 |      594 | 2024-12-05 | FaZe              | W   | 0.845      | 1.000        | 1.000 (0.845)    | 0.566 (0.479)    | 1 (0.845) |    17.37 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           35 |      610 | 2024-12-04 | BIG               | W   | 0.844      | 1.000        | 0.298 (0.252)    | 0.492 (0.415)    | 1 (0.844) |     3.61 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           34 |      842 | 2024-11-23 | Passion UA        | W   | 0.764      | -            | -                | -                | 1 (0.764) |     0.95 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           33 |      876 | 2024-11-21 | Ninjas in Pyjamas | W   | 0.757      | -            | -                | -                | 1 (0.757) |     0.65 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           32 |      885 | 2024-11-21 | BIG               | L   | 0.752      | -            | -                | -                | -         |   -20.96 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           31 |      900 | 2024-11-20 | PARIVISION        | W   | 0.750      | -            | -                | -                | 1 (0.750) |     0.24 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           30 |     1280 | 2024-11-03 | The MongolZ       | L   | 0.634      | -            | -                | -                | -         |    -7.69 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           29 |     1312 | 2024-11-02 | OG                | W   | 0.627      | 0.898        | 0.168 (0.095)    | 0.273 (0.154)    | 1 (0.627) |     0.27 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           28 |     1458 | 2024-10-26 | fnatic            | W   | 0.579      | 0.477        | 0.177 (0.049)    | -                | -         |     0.64 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           27 |     1503 | 2024-10-23 | Ninjas in Pyjamas | W   | 0.561      | -            | -                | -                | -         |     0.41 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           26 |     1509 | 2024-10-23 | Legacy            | W   | 0.559      | 0.477        | -                | 0.498 (0.133)    | -         |     0.46 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           25 |     1536 | 2024-10-20 | ENCE              | L   | 0.540      | -            | -                | -                | -         |   -16.33 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           24 |     1564 | 2024-10-19 | B8                | W   | 0.534      | 0.589        | -                | 0.499 (0.157)    | 1 (0.534) |     0.63 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           23 |     1625 | 2024-10-17 | ENCE              | W   | 0.519      | 0.589        | 0.331 (0.101)    | -                | 1 (0.519) |     0.57 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           22 |     1636 | 2024-10-17 | Rebels            | W   | 0.518      | 0.589        | -                | 0.330 (0.101)    | 1 (0.518) |     0.13 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           21 |     1715 | 2024-10-12 | Natus Vincere     | L   | 0.487      | -            | -                | -                | -         |    -6.29 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           20 |     1778 | 2024-10-09 | Vitality          | W   | 0.467      | 0.624        | 0.879 (0.256)    | 0.505 (0.147)    | -         |     7.62 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           19 |     1815 | 2024-10-08 | Astralis          | W   | 0.460      | 0.624        | 0.318 (0.091)    | -                | -         |     1.05 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           18 |     1841 | 2024-10-07 | G2                | W   | 0.453      | 0.624        | 1.000 (0.283)    | 0.569 (0.161)    | -         |    11.33 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           17 |     2524 | 2024-09-18 | MIBR              | L   | 0.326      | -            | -                | -                | -         |    -7.70 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           16 |     2558 | 2024-09-17 | Virtus.pro        | W   | 0.319      | 0.889        | -                | 0.386 (0.109)    | -         |     0.80 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           15 |     2801 | 2024-09-08 | HEROIC            | W   | 0.259      | 0.889        | 0.262 (0.060)    | -                | -         |     0.44 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           14 |     2830 | 2024-09-07 | Ninjas in Pyjamas | W   | 0.253      | -            | -                | -                | -         |     0.19 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           13 |     2883 | 2024-09-05 | HEROIC            | L   | 0.241      | -            | -                | -                | -         |    -7.21 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           12 |     2927 | 2024-09-04 | Lynn Vision       | W   | 0.234      | -            | -                | -                | -         |     0.12 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           11 |     2964 | 2024-09-03 | Ninjas in Pyjamas | L   | 0.227      | -            | -                | -                | -         |    -6.98 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           10 |     3091 | 2024-08-29 | Eternal Fire      | L   | 0.192      | -            | -                | -                | -         |    -4.36 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            9 |     3124 | 2024-08-28 | paiN              | L   | 0.187      | -            | -                | -                | -         |    -4.78 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            8 |     3138 | 2024-08-28 | Falcons           | W   | 0.186      | -            | -                | -                | -         |     0.07 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            7 |     3184 | 2024-08-27 | fnatic            | W   | 0.181      | -            | -                | -                | -         |     0.17 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            6 |     3198 | 2024-08-27 | 3DMAX             | W   | 0.179      | -            | -                | -                | -         |     0.62 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |     3256 | 2024-08-26 | B8                | W   | 0.174      | -            | -                | -                | -         |     0.17 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |     3274 | 2024-08-26 | Cloud9            | L   | 0.173      | -            | -                | -                | -         |    -5.34 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            3 |     3431 | 2024-08-21 | OG                | L   | 0.140      | -            | -                | -                | -         |    -4.37 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            2 |     3817 | 2024-08-09 | FURIA             | L   | 0.060      | -            | -                | -                | -         |    -1.38 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            1 |     3838 | 2024-08-08 | 3DMAX             | W   | 0.053      | -            | -                | -                | -         |     0.18 | degster, kyxsan, NertZ, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($178,110.05)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.87) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.912 | $45,000.00     | $41,027.93      |
| 2024-11-03 |      0.634 | $150,000.00    | $95,092.64      |
| 2024-10-20 |      0.540 | $40,000.00     | $21,615.13      |
| 2024-10-13 |      0.494 | $20,000.00     | $9,882.88       |
| 2024-09-22 |      0.354 | $23,500.00     | $8,320.30       |
| 2024-09-01 |      0.212 | $5,000.00      | $1,061.03       |
| 2024-08-25 |      0.167 | $5,000.00      | $836.26         |
| 2024-08-09 |      0.061 | $4,500.00      | $273.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
