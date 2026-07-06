### Roster Details<br />
Team Name: The Last Resort<br />
Roster: arTisT, bevve, Extinct, Girafffe, Vacancy<br />
Global Rank: [132](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [90]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  883.8<br />
<br />
Final Rank Value (883.8) = Starting Rank Value (859.8) + Head To Head Adjustments (24.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.159[<sup>2</sup>](#table1)
- LAN Wins: 0.219[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 859.8
- 400 + ( ( 0.244 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 859.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |      307 | 2026-06-13 | Dripmen          | W   | 1.000      | 0.288        | 0.003 (0.001)    | -                | 1 (1.000) |     7.47 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           56 |      442 | 2026-06-08 | GenOne           | L   | 1.000      | -            | -                | -                | -         |   -10.88 | bevve, Extinct, Girafffe, smooya, Vacancy |
|           55 |      545 | 2026-06-04 | brazylijski luz  | W   | 0.987      | 0.344        | -                | 0.419 (0.142)    | 0 (0.000) |    11.94 | bevve, Extinct, Girafffe, smooya, Vacancy |
|           54 |      576 | 2026-06-03 | Entropy          | W   | 0.979      | 0.344        | 0.004 (0.001)    | -                | 0 (0.000) |    13.49 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           53 |      835 | 2026-05-26 | Dripmen          | W   | 0.927      | -            | -                | -                | 0 (0.000) |     7.48 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           52 |      983 | 2026-05-23 | EAC              | L   | 0.905      | -            | -                | -                | -         |    -6.15 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           51 |     1468 | 2026-05-08 | Atreides         | L   | 0.806      | -            | -                | -                | -         |   -14.51 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           50 |     1481 | 2026-05-07 | INOX Division    | L   | 0.800      | -            | -                | -                | -         |    -7.61 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           49 |     1492 | 2026-05-06 | Lavked           | L   | 0.795      | -            | -                | -                | -         |    -8.77 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           48 |     1525 | 2026-05-04 | HEROIC Academy   | W   | 0.781      | 0.435        | 0.003 (0.001)    | 0.420 (0.143)    | 0 (0.000) |     8.36 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           47 |     1532 | 2026-05-04 | M1X KS           | W   | 0.780      | -            | -                | -                | 0 (0.000) |     4.34 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           46 |     1567 | 2026-05-03 | AM               | L   | 0.772      | -            | -                | -                | -         |    -4.86 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           45 |     1621 | 2026-05-02 | cirahvi          | W   | 0.764      | 0.303        | 0.004 (0.001)    | -                | 0 (0.000) |     6.08 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           44 |     1665 | 2026-05-01 | GenOne           | L   | 0.759      | -            | -                | -                | -         |   -12.70 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           43 |     1775 | 2026-04-28 | EAC              | W   | 0.741      | 0.435        | 0.015 (0.005)    | 0.700 (0.226)    | -         |    19.22 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           42 |     1819 | 2026-04-27 | Phantom          | L   | 0.734      | -            | -                | -                | -         |    -7.93 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           41 |     1878 | 2026-04-26 | Just Players     | W   | 0.728      | 0.384        | 0.004 (0.001)    | 0.444 (0.124)    | -         |     9.21 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           40 |     1897 | 2026-04-26 | ex-MANA          | W   | 0.726      | 0.303        | -                | 0.598 (0.131)    | -         |    10.74 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           39 |     1959 | 2026-04-25 | Nemesis          | L   | 0.721      | -            | -                | -                | -         |    -2.70 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           38 |     2014 | 2026-04-24 | Famalicão        | W   | 0.714      | -            | -                | -                | -         |     6.22 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           37 |     2061 | 2026-04-23 | ex-Zero Tenacity | W   | 0.706      | 0.384        | -                | 0.879 (0.239)    | -         |    10.48 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           36 |     2068 | 2026-04-23 | ex-MANA          | L   | 0.706      | -            | -                | -                | -         |   -11.15 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           35 |     2085 | 2026-04-22 | Young Ninjas     | L   | 0.700      | -            | -                | -                | -         |   -10.91 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           34 |     2104 | 2026-04-21 | INOX Division    | L   | 0.693      | -            | -                | -                | -         |    -9.29 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           33 |     2163 | 2026-04-18 | HEROIC Academy   | W   | 0.673      | -            | -                | -                | -         |     9.54 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           32 |     2722 | 2026-04-02 | DONSTU           | L   | 0.568      | -            | -                | -                | -         |   -12.53 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           31 |     2804 | 2026-04-01 | PsychoFace       | L   | 0.561      | -            | -                | -                | -         |    -5.12 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           30 |     2915 | 2026-03-31 | Johnny Speeds    | L   | 0.553      | -            | -                | -                | -         |    -3.39 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           29 |     2992 | 2026-03-30 | BIG EQUIPA       | W   | 0.547      | -            | -                | -                | -         |     2.64 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           28 |     3044 | 2026-03-29 | DONSTU           | W   | 0.541      | -            | -                | -                | -         |     4.62 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           27 |     3538 | 2026-03-21 | CTRL             | W   | 0.487      | -            | -                | -                | 1 (0.487) |     1.83 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           26 |     3563 | 2026-03-21 | ex-MANA          | W   | 0.486      | 0.435        | -                | 0.598 (0.126)    | -         |     7.03 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           25 |     3591 | 2026-03-20 | rottweilers      | L   | 0.482      | -            | -                | -                | -         |   -12.80 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           24 |     3655 | 2026-03-19 | Leo              | W   | 0.473      | 0.384        | 0.005 (0.001)    | -                | -         |     5.56 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           23 |     3666 | 2026-03-19 | Rune Eaters      | W   | 0.472      | 0.435        | 0.010 (0.002)    | 0.680 (0.140)    | -         |    11.07 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           22 |     3692 | 2026-03-18 | HEROIC Academy   | W   | 0.467      | -            | -                | -                | -         |     6.36 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           21 |     3714 | 2026-03-18 | ex-RUBY          | W   | 0.465      | 0.435        | 0.037 (0.007)    | 1.000 (0.202)    | -         |     9.86 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           20 |     3732 | 2026-03-17 | Nemiga           | L   | 0.461      | -            | -                | -                | -         |    -2.19 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           19 |     3792 | 2026-03-16 | Clutchain fe     | W   | 0.453      | 0.384        | 0.012 (0.002)    | -                | -         |     4.15 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           18 |     3829 | 2026-03-15 | HEROIC Academy   | W   | 0.447      | -            | -                | -                | -         |     6.71 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           17 |     3928 | 2026-03-13 | Lilmix           | W   | 0.433      | -            | -                | -                | -         |     4.76 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           16 |     3957 | 2026-03-12 | PsychoFace       | L   | 0.428      | -            | -                | -                | -         |    -4.00 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           15 |     3989 | 2026-03-12 | Bebop            | W   | 0.426      | 0.384        | -                | 0.704 (0.115)    | -         |     6.10 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           14 |     4238 | 2026-03-07 | NEW VISION       | L   | 0.394      | -            | -                | -                | -         |    -7.82 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           13 |     4323 | 2026-03-05 | Clutchain        | W   | 0.381      | -            | -                | -                | -         |     1.79 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           12 |     4754 | 2026-02-24 | BUFF3D UP        | W   | 0.321      | -            | -                | -                | -         |     0.79 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           11 |     4873 | 2026-02-22 | Dripmen          | W   | 0.307      | -            | -                | -                | 1 (0.307) |     3.14 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|           10 |     4926 | 2026-02-21 | CTRL             | W   | 0.301      | -            | -                | -                | 1 (0.301) |     1.39 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            9 |     5044 | 2026-02-19 | Fuzos            | L   | 0.286      | -            | -                | -                | -         |    -6.44 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            8 |     5502 | 2026-02-10 | Bebop            | L   | 0.226      | -            | -                | -                | -         |    -4.25 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            7 |     5514 | 2026-02-09 | home             | L   | 0.221      | -            | -                | -                | -         |    -6.05 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            6 |     5780 | 2026-01-31 | AaB              | L   | 0.161      | -            | -                | -                | -         |    -4.35 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            5 |     5988 | 2026-01-23 | ex-CPH Wolves    | W   | 0.111      | -            | -                | -                | -         |     0.25 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            4 |     6231 | 2026-01-17 | Phantom          | L   | 0.066      | -            | -                | -                | -         |    -1.66 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            3 |     6377 | 2026-01-13 | HYPERSPIRIT      | L   | 0.039      | -            | -                | -                | -         |    -0.57 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            2 |     6394 | 2026-01-11 | Acend            | L   | 0.026      | -            | -                | -                | -         |    -0.03 | arTisT, bevve, Extinct, Girafffe, Vacancy |
|            1 |     6396 | 2026-01-11 | BRUTE            | W   | 0.026      | -            | -                | -                | -         |     0.09 | arTisT, bevve, Extinct, Girafffe, Vacancy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,620.86)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      1.000 | $2,302.00      | $2,302.00       |
| 2026-03-21 |      0.487 | $2,297.00      | $1,119.37       |
| 2026-02-22 |      0.307 | $3,909.00      | $1,199.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
