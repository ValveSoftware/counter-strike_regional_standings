### Roster Details<br />
Team Name: Mythic<br />
Roster: Austin, Cooper, fl0m, freakazoid, Trucklover86<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [131](../standings_global.md)<br />
Regional Rank: [32]( ../standings_americas.md)<br />
Final Rank Value:  773.6<br />
<br />
Final Rank Value (773.6) = Starting Rank Value (809.7) + Head To Head Adjustments (-36.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.126[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 809.7
- 400 + ( ( 0.202 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 809.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      246 | 2024-07-17 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.06 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           52 |      251 | 2024-07-17 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.51 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           51 |      307 | 2024-07-16 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.18 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           50 |      314 | 2024-07-16 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.76 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           49 |      361 | 2024-07-15 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -15.65 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           48 |      364 | 2024-07-15 | BOSS             | L   | 1.000      | -            | -                | -                | -         |   -17.09 | Austin, Cooper, fl0m, freakazoid, Trucklover86 |
|           47 |      625 | 2024-06-15 | Wildcard         | L   | 0.942      | -            | -                | -                | -         |    -8.55 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           46 |      700 | 2024-06-13 | LAG              | W   | 0.929      | 0.371        | 0.017 (0.006)    | 0.385 (0.132)    | 0 (0.000) |    15.29 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           45 |      987 | 2024-06-06 | Legacy           | L   | 0.882      | -            | -                | -                | -         |    -6.55 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           44 |     1052 | 2024-06-05 | Elevate          | L   | 0.876      | -            | -                | -                | -         |    -7.59 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           43 |     1107 | 2024-06-04 | BOSS             | W   | 0.869      | 0.477        | 0.018 (0.008)    | 0.378 (0.156)    | 0 (0.000) |    12.14 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           42 |     1117 | 2024-06-04 | Perseverance     | W   | 0.867      | 0.384        | -                | 0.243 (0.081)    | 0 (0.000) |    11.31 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           41 |     1435 | 2024-05-22 | M80              | L   | 0.781      | -            | -                | -                | -         |    -1.54 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           40 |     1502 | 2024-05-20 | Elevate          | W   | 0.769      | 0.384        | 0.035 (0.010)    | 0.563 (0.166)    | 0 (0.000) |    18.25 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           39 |     1668 | 2024-05-15 | Perseverance     | W   | 0.735      | 0.477        | -                | 0.243 (0.085)    | 0 (0.000) |    10.56 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           38 |     1674 | 2024-05-15 | Perseverance     | L   | 0.735      | -            | -                | -                | -         |   -12.87 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           37 |     1721 | 2024-05-14 | Party Astronauts | L   | 0.729      | -            | -                | -                | -         |    -7.77 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           36 |     1729 | 2024-05-14 | Party Astronauts | W   | 0.729      | 0.477        | 0.053 (0.018)    | 0.591 (0.206)    | 0 (0.000) |    15.59 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           35 |     1799 | 2024-05-12 | Perseverance     | L   | 0.714      | -            | -                | -                | -         |   -12.55 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           34 |     1816 | 2024-05-11 | Nouns            | W   | 0.708      | 0.270        | 0.073 (0.014)    | 0.589 (0.113)    | 0 (0.000) |    16.29 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           33 |     1817 | 2024-05-11 | Wildcard         | W   | 0.708      | 0.270        | 0.069 (0.013)    | 0.557 (0.107)    | 0 (0.000) |    15.87 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           32 |     2188 | 2024-04-24 | BOSS             | W   | 0.596      | 0.477        | 0.018 (0.005)    | 0.378 (0.107)    | 0 (0.000) |    11.58 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           31 |     2189 | 2024-04-24 | BOSS             | L   | 0.595      | -            | -                | -                | -         |    -7.26 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           30 |     2461 | 2024-04-15 | NRG              | L   | 0.535      | -            | -                | -                | -         |    -6.07 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           29 |     2462 | 2024-04-15 | NRG              | L   | 0.535      | -            | -                | -                | -         |    -6.34 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           28 |     2517 | 2024-04-11 | Carpe Diem       | L   | 0.509      | -            | -                | -                | -         |   -10.79 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           27 |     2520 | 2024-04-11 | Carpe Diem       | W   | 0.509      | -            | -                | -                | 0 (0.000) |     5.28 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           26 |     2551 | 2024-04-10 | LAG              | L   | 0.502      | -            | -                | -                | -         |    -6.10 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           25 |     2556 | 2024-04-10 | LAG              | L   | 0.502      | -            | -                | -                | -         |    -6.37 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           24 |     2921 | 2024-03-27 | Wildcard         | L   | 0.408      | -            | -                | -                | -         |    -4.15 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           23 |     2924 | 2024-03-27 | Wildcard         | L   | 0.408      | -            | -                | -                | -         |    -4.28 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           22 |     2961 | 2024-03-26 | Limitless        | W   | 0.402      | -            | -                | -                | -         |     3.83 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           21 |     2966 | 2024-03-26 | Limitless        | L   | 0.402      | -            | -                | -                | -         |    -9.03 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           20 |     3042 | 2024-03-20 | Nouns            | W   | 0.362      | 0.477        | 0.073 (0.013)    | 0.589 (0.102)    | -         |     7.55 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           19 |     3047 | 2024-03-20 | Nouns            | L   | 0.362      | -            | -                | -                | -         |    -3.91 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           18 |     3063 | 2024-03-19 | M80              | W   | 0.356      | 0.477        | 0.082 (0.014)    | -                | -         |     3.02 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           17 |     3066 | 2024-03-19 | M80              | W   | 0.356      | 0.477        | 0.082 (0.014)    | -                | -         |     3.09 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           16 |     3155 | 2024-03-14 | Take Flyte       | W   | 0.322      | -            | -                | -                | -         |     3.77 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           15 |     3159 | 2024-03-14 | Take Flyte       | W   | 0.322      | -            | -                | -                | -         |     3.87 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           14 |     3192 | 2024-03-13 | Perseverance     | L   | 0.315      | -            | -                | -                | -         |    -5.76 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           13 |     3234 | 2024-03-12 | Wildcard         | W   | 0.308      | -            | -                | -                | -         |     6.53 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           12 |     3405 | 2024-03-05 | MIGHT            | L   | 0.263      | -            | -                | -                | -         |    -6.71 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           11 |     3407 | 2024-03-05 | MIGHT            | L   | 0.262      | -            | -                | -                | -         |    -6.80 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|           10 |     3620 | 2024-02-24 | NRG              | L   | 0.195      | -            | -                | -                | -         |    -2.66 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            9 |     3709 | 2024-02-20 | Party Astronauts | L   | 0.168      | -            | -                | -                | -         |    -1.76 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            8 |     3734 | 2024-02-19 | OMiT             | W   | 0.163      | -            | -                | -                | -         |     2.26 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            7 |     3735 | 2024-02-19 | NRG              | L   | 0.162      | -            | -                | -                | -         |    -2.26 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            6 |     3802 | 2024-02-16 | FLUFFY AIMERS    | W   | 0.142      | -            | -                | -                | -         |     2.01 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            5 |     3805 | 2024-02-16 | E-Xolos LAZER    | W   | 0.141      | -            | -                | -                | -         |     1.88 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            4 |     3860 | 2024-02-14 | FLUFFY AIMERS    | W   | 0.129      | -            | -                | -                | -         |     1.84 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            3 |     3862 | 2024-02-14 | FLUFFY AIMERS    | W   | 0.129      | -            | -                | -                | -         |     1.86 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            2 |     3901 | 2024-02-13 | Elevate          | W   | 0.123      | -            | -                | -                | -         |     3.04 | Cooper, fl0m, freakazoid, hate, Trucklover86   |
|            1 |     3903 | 2024-02-13 | Elevate          | L   | 0.122      | -            | -                | -                | -         |    -0.83 | Cooper, fl0m, freakazoid, hate, Trucklover86   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,418.60)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $750.00        | $711.74         |
| 2024-06-09 |      0.902 | $3,000.00      | $2,706.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
