### Roster Details<br />
Team Name: Wildcard<br />
Roster: JBa, phzy, Sonic, stanislaw, susp<br />
Global Rank: [31](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [22]( ../../standings_europe_2024_09_26.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_26.md)<br />
Regional Rank: [10]( ../../standings_americas_2024_09_26.md)<br />
<br />
Final Rank Value:  1114.0<br />
<br />
Final Rank Value (1114.0) = Starting Rank Value (988.9) + Head To Head Adjustments (125.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.480[<sup>1</sup>](#table2)
- Bounty Collected: 0.393[<sup>2</sup>](#table1)
- Opponent Network: 0.267[<sup>2</sup>](#table1)
- LAN Wins: 0.106[<sup>2</sup>](#table1)

The average of these factors is 0.312<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 988.9
- 400 + ( ( 0.312 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 988.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           78 |      236 | 2024-09-19 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -18.85 | JBa, phzy, Sonic, stanislaw, susp        |
|           77 |      240 | 2024-09-19 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -20.48 | JBa, phzy, Sonic, stanislaw, susp        |
|           76 |      270 | 2024-09-18 | E-Xolos LAZER    | W   | 1.000      | 0.477        | -                | 0.522 (0.249)    | 0 (0.000) |     3.90 | JBa, phzy, Sonic, stanislaw, susp        |
|           75 |      276 | 2024-09-18 | Revenge Nation   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.14 | JBa, phzy, Sonic, stanislaw, susp        |
|           74 |      278 | 2024-09-18 | Revenge Nation   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.15 | JBa, phzy, Sonic, stanislaw, susp        |
|           73 |      602 | 2024-09-07 | 3DMAX            | L   | 1.000      | -            | -                | -                | -         |    -6.46 | JBa, phzy, Sonic, stanislaw, susp        |
|           72 |      621 | 2024-09-06 | KOI              | W   | 1.000      | 0.889        | 0.040 (0.036)    | 0.255 (0.227)    | 1 (1.000) |     6.18 | JBa, phzy, Sonic, stanislaw, susp        |
|           71 |      667 | 2024-09-05 | 9z               | L   | 1.000      | -            | -                | -                | -         |    -8.37 | JBa, phzy, Sonic, stanislaw, susp        |
|           70 |      707 | 2024-09-04 | Spirit           | L   | 1.000      | -            | -                | -                | -         |    -0.41 | JBa, phzy, Sonic, stanislaw, susp        |
|           69 |      805 | 2024-08-30 | NRG              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.93 | JBa, phzy, Sonic, stanislaw, susp        |
|           68 |      831 | 2024-08-29 | NRG              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.02 | JBa, phzy, Sonic, stanislaw, susp        |
|           67 |      836 | 2024-08-29 | Party Astronauts | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.39 | JBa, phzy, Sonic, stanislaw, susp        |
|           66 |      954 | 2024-08-27 | BOSS             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.17 | JBa, phzy, Sonic, stanislaw, susp        |
|           65 |     1000 | 2024-08-26 | E-Xolos LAZER    | W   | 0.995      | -            | -                | -                | 0 (0.000) |     4.01 | JBa, phzy, Sonic, stanislaw, susp        |
|           64 |     1027 | 2024-08-26 | Mythic           | W   | 0.994      | -            | -                | -                | 0 (0.000) |     2.93 | JBa, phzy, Sonic, stanislaw, susp        |
|           63 |     1185 | 2024-08-21 | Legacy           | W   | 0.963      | 0.477        | 0.067 (0.031)    | 0.740 (0.340)    | -         |    10.57 | JBa, phzy, Sonic, stanislaw, susp        |
|           62 |     1187 | 2024-08-21 | Legacy           | W   | 0.962      | 0.477        | 0.067 (0.031)    | 0.740 (0.340)    | -         |    11.43 | JBa, phzy, Sonic, stanislaw, susp        |
|           61 |     1317 | 2024-08-18 | Nouns            | W   | 0.943      | 0.371        | 0.062 (0.022)    | -                | -         |    13.29 | JBa, phzy, Sonic, stanislaw, susp        |
|           60 |     1320 | 2024-08-18 | M80              | W   | 0.942      | 0.371        | 0.223 (0.078)    | -                | -         |    23.19 | JBa, phzy, Sonic, stanislaw, susp        |
|           59 |     1332 | 2024-08-17 | NRG              | W   | 0.936      | 0.371        | 0.035 (0.012)    | -                | -         |    12.91 | JBa, phzy, Sonic, stanislaw, susp        |
|           58 |     1443 | 2024-08-13 | FLUFFY AIMERS    | W   | 0.908      | 0.477        | -                | 0.530 (0.230)    | -         |     4.18 | JBa, phzy, Sonic, stanislaw, susp        |
|           57 |     1447 | 2024-08-13 | FLUFFY AIMERS    | W   | 0.908      | 0.477        | -                | 0.530 (0.229)    | -         |     4.36 | JBa, phzy, Sonic, stanislaw, susp        |
|           56 |     1486 | 2024-08-12 | Nouns            | W   | 0.903      | 0.477        | 0.062 (0.027)    | 0.640 (0.276)    | -         |    14.14 | JBa, phzy, Sonic, stanislaw, susp        |
|           55 |     1487 | 2024-08-12 | Nouns            | W   | 0.902      | 0.477        | 0.062 (0.027)    | 0.640 (0.276)    | -         |    15.31 | JBa, phzy, Sonic, stanislaw, susp        |
|           54 |     1685 | 2024-08-06 | Mythic           | L   | 0.862      | -            | -                | -                | -         |   -22.82 | JBa, phzy, Sonic, stanislaw, susp        |
|           53 |     1689 | 2024-08-06 | Mythic           | W   | 0.862      | -            | -                | -                | -         |     4.06 | JBa, phzy, Sonic, stanislaw, susp        |
|           52 |     1746 | 2024-08-04 | NRG              | L   | 0.848      | -            | -                | -                | -         |   -15.88 | JBa, phzy, Sonic, stanislaw, susp        |
|           51 |     1781 | 2024-08-03 | Take Flyte       | W   | 0.842      | -            | -                | -                | -         |     3.88 | JBa, MarKE, phzy, Sonic, susp            |
|           50 |     1888 | 2024-07-31 | timbermen        | W   | 0.823      | 0.477        | 0.028 (0.011)    | 0.642 (0.252)    | -         |     9.81 | JBa, phzy, Sonic, stanislaw, susp        |
|           49 |     1895 | 2024-07-31 | timbermen        | W   | 0.822      | 0.477        | -                | 0.642 (0.252)    | -         |    10.51 | JBa, phzy, Sonic, stanislaw, susp        |
|           48 |     2228 | 2024-07-21 | NRG              | W   | 0.756      | -            | -                | -                | -         |    10.70 | JBa, phzy, Sonic, stanislaw, susp        |
|           47 |     2229 | 2024-07-21 | timbermen        | W   | 0.755      | -            | -                | -                | -         |    11.40 | JBa, phzy, Sonic, stanislaw, susp        |
|           46 |     2254 | 2024-07-20 | Party Astronauts | W   | 0.749      | -            | -                | -                | -         |     9.04 | JBa, phzy, Sonic, stanislaw, susp        |
|           45 |     2328 | 2024-07-18 | Take Flyte       | W   | 0.736      | -            | -                | -                | -         |     5.10 | JBa, phzy, Sonic, stanislaw, susp        |
|           44 |     2333 | 2024-07-18 | Take Flyte       | W   | 0.736      | -            | -                | -                | -         |     5.34 | JBa, phzy, Sonic, stanislaw, susp        |
|           43 |     2399 | 2024-07-17 | Limitless        | W   | 0.729      | -            | -                | -                | -         |     3.53 | JBa, phzy, Sonic, stanislaw, susp        |
|           42 |     2402 | 2024-07-17 | Limitless        | W   | 0.729      | -            | -                | -                | -         |     3.65 | JBa, phzy, Sonic, stanislaw, susp        |
|           41 |     2457 | 2024-07-16 | LAG              | W   | 0.722      | -            | -                | -                | -         |     3.88 | JBa, phzy, Sonic, stanislaw, susp        |
|           40 |     2463 | 2024-07-16 | LAG              | L   | 0.722      | -            | -                | -                | -         |   -19.25 | JBa, phzy, Sonic, stanislaw, susp        |
|           39 |     2747 | 2024-06-16 | Nouns            | L   | 0.521      | -            | -                | -                | -         |    -6.82 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           38 |     2771 | 2024-06-15 | Mythic           | W   | 0.515      | -            | -                | -                | -         |     3.55 | JBa, motm, SLIGHT, Sonic, stanislaw      |
|           37 |     2845 | 2024-06-13 | Final Form       | W   | 0.503      | -            | -                | -                | -         |     0.98 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           36 |     2956 | 2024-06-09 | M80              | L   | 0.476      | -            | -                | -                | -         |    -2.49 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           35 |     3015 | 2024-06-08 | Nouns            | W   | 0.470      | 0.477        | 0.062 (0.014)    | -                | -         |     8.88 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           34 |     3025 | 2024-06-08 | Party Astronauts | L   | 0.468      | -            | -                | -                | -         |    -9.48 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           33 |     3074 | 2024-06-07 | LAG              | W   | 0.463      | -            | -                | -                | -         |     2.15 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           32 |     3130 | 2024-06-06 | M80              | L   | 0.456      | -            | -                | -                | -         |    -2.29 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           31 |     3143 | 2024-06-06 | NRG              | L   | 0.455      | -            | -                | -                | -         |    -9.04 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           30 |     3150 | 2024-06-06 | M80              | L   | 0.454      | -            | -                | -                | -         |    -2.43 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           29 |     3166 | 2024-06-06 | NRG              | W   | 0.454      | -            | -                | -                | -         |     5.22 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           28 |     3201 | 2024-06-05 | Party Astronauts | W   | 0.449      | -            | -                | -                | -         |     4.49 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           27 |     3255 | 2024-06-04 | Homyno           | W   | 0.442      | -            | -                | -                | -         |     1.85 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           26 |     3545 | 2024-05-23 | M80              | L   | 0.362      | -            | -                | -                | -         |    -1.88 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           25 |     3559 | 2024-05-22 | Take Flyte       | W   | 0.356      | -            | -                | -                | -         |     2.38 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           24 |     3563 | 2024-05-22 | Take Flyte       | W   | 0.356      | -            | -                | -                | -         |     2.43 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           23 |     3571 | 2024-05-22 | LAG              | W   | 0.355      | -            | -                | -                | -         |     1.47 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           22 |     3619 | 2024-05-21 | Limitless        | W   | 0.348      | -            | -                | -                | -         |     2.01 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           21 |     3625 | 2024-05-21 | Limitless        | W   | 0.348      | -            | -                | -                | -         |     2.05 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           20 |     3682 | 2024-05-19 | Limitless        | W   | 0.335      | -            | -                | -                | -         |     1.13 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           19 |     3810 | 2024-05-15 | BOSS             | W   | 0.309      | -            | -                | -                | -         |     2.29 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           18 |     3821 | 2024-05-15 | BOSS             | W   | 0.309      | -            | -                | -                | -         |     2.33 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           17 |     3866 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.303      | -            | -                | -                | -         |     2.15 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           16 |     3870 | 2024-05-14 | FLUFFY AIMERS    | W   | 0.302      | -            | -                | -                | -         |     2.19 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           15 |     3916 | 2024-05-13 | Nouns            | W   | 0.296      | -            | -                | -                | -         |     5.82 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           14 |     3918 | 2024-05-13 | Nouns            | L   | 0.296      | -            | -                | -                | -         |    -3.56 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           13 |     3961 | 2024-05-11 | Elevate          | L   | 0.282      | -            | -                | -                | -         |    -8.23 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           12 |     3963 | 2024-05-11 | Mythic           | L   | 0.282      | -            | -                | -                | -         |    -7.11 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           11 |     4013 | 2024-05-09 | MIGHT            | W   | 0.269      | -            | -                | -                | -         |     0.51 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|           10 |     4017 | 2024-05-09 | MIGHT            | W   | 0.269      | -            | -                | -                | -         |     0.51 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|            9 |     4029 | 2024-05-08 | Limitless        | W   | 0.263      | -            | -                | -                | -         |     0.87 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|            8 |     4032 | 2024-05-08 | Limitless        | W   | 0.262      | -            | -                | -                | -         |     0.88 | Grizz, JBa, SLIGHT, Sonic, stanislaw     |
|            7 |     4146 | 2024-05-02 | Party Astronauts | W   | 0.222      | -            | -                | -                | -         |     1.43 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|            6 |     4147 | 2024-05-02 | Party Astronauts | L   | 0.222      | -            | -                | -                | -         |    -5.63 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|            5 |     4310 | 2024-04-25 | NRG              | W   | 0.176      | -            | -                | -                | -         |     2.09 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|            4 |     4312 | 2024-04-25 | NRG              | L   | 0.176      | -            | -                | -                | -         |    -3.50 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|            3 |     4352 | 2024-04-23 | timbermen        | W   | 0.163      | -            | -                | -                | -         |     3.02 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|            2 |     4354 | 2024-04-23 | timbermen        | L   | 0.162      | -            | -                | -                | -         |    -2.13 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |
|            1 |     4546 | 2024-04-17 | timbermen        | L   | 0.122      | -            | -                | -                | -         |    -1.60 | C4LLM3SU3, JBa, SLIGHT, Sonic, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,382.48)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-08-18 |      0.943 | $10,000.00     | $9,431.52       |
| 2024-07-21 |      0.756 | $4,000.00      | $3,025.18       |
| 2024-06-16 |      0.523 | $1,500.00      | $784.20         |
| 2024-06-09 |      0.476 | $15,000.00     | $7,141.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
