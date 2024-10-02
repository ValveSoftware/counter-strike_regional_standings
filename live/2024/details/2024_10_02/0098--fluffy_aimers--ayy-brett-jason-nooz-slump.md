### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: ayy, brett, jason, nooz, slump<br />
Global Rank: [98](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [24]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  846.1<br />
<br />
Final Rank Value (846.1) = Starting Rank Value (751.3) + Head To Head Adjustments (94.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.023[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.3
- 400 + ( ( 0.184 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 751.3


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
|           61 |       26 | 2024-10-01 | Revenge Nation   | W   | 1.000      | 0.371        | -                | 0.185 (0.068)    | 0 (0.000) |     5.93 | ayy, brett, jason, nooz, slump           |
|           60 |      354 | 2024-09-23 | LAG              | W   | 1.000      | 0.477        | -                | 0.261 (0.125)    | 0 (0.000) |     6.55 | ayy, brett, jason, nooz, slump           |
|           59 |      357 | 2024-09-23 | LAG              | W   | 1.000      | 0.477        | -                | 0.261 (0.125)    | 0 (0.000) |     6.96 | ayy, brett, jason, nooz, slump           |
|           58 |      397 | 2024-09-22 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -6.64 | brett, C4LLM3SU3, jason, nooz, slump     |
|           57 |      420 | 2024-09-21 | Legacy           | W   | 1.000      | 0.303        | 0.062 (0.019)    | 0.681 (0.206)    | 0 (0.000) |    24.97 | ayy, brett, jason, nooz, slump           |
|           56 |      917 | 2024-09-04 | Take Flyte       | W   | 1.000      | 0.477        | 0.004 (0.002)    | 0.261 (0.125)    | 0 (0.000) |    11.26 | ayy, brett, jason, nooz, slump           |
|           55 |      921 | 2024-09-04 | Take Flyte       | W   | 1.000      | 0.477        | 0.004 (0.002)    | 0.261 (0.125)    | 0 (0.000) |    12.22 | ayy, brett, jason, nooz, slump           |
|           54 |     1007 | 2024-09-01 | Liquid           | L   | 0.994      | -            | -                | -                | -         |    -0.24 | brett, jason, MarKE, nooz, slump         |
|           53 |     1024 | 2024-08-31 | LAG              | W   | 0.988      | -            | -                | -                | 0 (0.000) |     9.44 | brett, jason, MarKE, nooz, slump         |
|           52 |     1026 | 2024-08-31 | Liquid           | L   | 0.987      | -            | -                | -                | -         |    -0.19 | brett, jason, MarKE, nooz, slump         |
|           51 |     1115 | 2024-08-28 | Legacy           | L   | 0.969      | -            | -                | -                | -         |    -6.62 | brett, jason, MarKE, nooz, slump         |
|           50 |     1121 | 2024-08-28 | E-Xolos LAZER    | W   | 0.967      | -            | -                | -                | 0 (0.000) |    15.46 | brett, jason, MarKE, nooz, slump         |
|           49 |     1180 | 2024-08-27 | Party Astronauts | W   | 0.961      | 0.143        | 0.021 (0.003)    | -                | -         |    22.39 | brett, jason, MarKE, nooz, slump         |
|           48 |     1231 | 2024-08-26 | Phoenix          | W   | 0.955      | -            | -                | -                | -         |    11.45 | brett, jason, MarKE, nooz, slump         |
|           47 |     1255 | 2024-08-26 | Nouns            | L   | 0.953      | -            | -                | -                | -         |    -4.31 | brett, jason, MarKE, nooz, slump         |
|           46 |     1515 | 2024-08-19 | Priority         | W   | 0.908      | -            | -                | -                | -         |     6.07 | brett, jason, MarKE, nooz, slump         |
|           45 |     1516 | 2024-08-19 | Party Astronauts | L   | 0.908      | -            | -                | -                | -         |    -6.47 | brett, jason, MarKE, nooz, slump         |
|           44 |     1518 | 2024-08-19 | undefined        | W   | 0.908      | 0.143        | 0.015 (0.002)    | -                | -         |    15.26 | brett, jason, MarKE, nooz, slump         |
|           43 |     1668 | 2024-08-13 | Limitless        | L   | 0.868      | -            | -                | -                | -         |   -14.59 | bezymecc, brett, jason, sacrifice, slump |
|           42 |     1671 | 2024-08-13 | Limitless        | W   | 0.868      | 0.477        | 0.003 (0.001)    | 0.236 (0.098)    | -         |    12.84 | bezymecc, brett, jason, sacrifice, slump |
|           41 |     1676 | 2024-08-13 | Wildcard         | L   | 0.868      | -            | -                | -                | -         |    -4.03 | bezymecc, brett, jason, sacrifice, slump |
|           40 |     1680 | 2024-08-13 | Wildcard         | L   | 0.867      | -            | -                | -                | -         |    -4.19 | bezymecc, brett, jason, sacrifice, slump |
|           39 |     1717 | 2024-08-12 | BOSS             | L   | 0.862      | -            | -                | -                | -         |   -12.61 | bezymecc, brett, jason, sacrifice, slump |
|           38 |     1831 | 2024-08-08 | Final Form       | W   | 0.834      | -            | -                | -                | -         |    10.82 | bezymecc, brett, jason, sacrifice, slump |
|           37 |     1912 | 2024-08-06 | M80              | L   | 0.822      | -            | -                | -                | -         |    -1.07 | bezymecc, brett, jason, sacrifice, slump |
|           36 |     1915 | 2024-08-06 | M80              | L   | 0.822      | -            | -                | -                | -         |    -1.08 | bezymecc, brett, jason, sacrifice, slump |
|           35 |     1978 | 2024-08-04 | Homyno           | W   | 0.808      | 0.371        | 0.005 (0.002)    | -                | -         |     9.36 | bezymecc, brett, jason, sacrifice, slump |
|           34 |     2126 | 2024-07-31 | Mythic           | L   | 0.781      | -            | -                | -                | -         |   -13.05 | bezymecc, brett, jason, sacrifice, slump |
|           33 |     2129 | 2024-07-31 | Mythic           | W   | 0.781      | 0.477        | 0.005 (0.002)    | 0.294 (0.109)    | -         |    11.70 | bezymecc, brett, jason, sacrifice, slump |
|           32 |     2326 | 2024-07-25 | NoVum            | W   | 0.742      | -            | -                | -                | -         |     3.24 | bezymecc, brett, jason, sacrifice, slump |
|           31 |     2365 | 2024-07-24 | E-Xolos LAZER    | L   | 0.735      | -            | -                | -                | -         |   -10.15 | bezymecc, brett, jason, sacrifice, slump |
|           30 |     2368 | 2024-07-24 | E-Xolos LAZER    | W   | 0.735      | 0.477        | 0.006 (0.002)    | 0.452 (0.158)    | -         |    13.30 | bezymecc, brett, jason, sacrifice, slump |
|           29 |     2399 | 2024-07-23 | Party Astronauts | L   | 0.728      | -            | -                | -                | -         |    -6.43 | bezymecc, brett, jason, sacrifice, slump |
|           28 |     2401 | 2024-07-23 | Party Astronauts | W   | 0.728      | 0.477        | 0.021 (0.007)    | 0.499 (0.173)    | -         |    16.95 | bezymecc, brett, jason, sacrifice, slump |
|           27 |     2687 | 2024-07-16 | NRG              | L   | 0.682      | -            | -                | -                | -         |    -5.01 | bezymecc, brett, jason, sacrifice, slump |
|           26 |     2692 | 2024-07-16 | NRG              | L   | 0.682      | -            | -                | -                | -         |    -5.23 | bezymecc, brett, jason, sacrifice, slump |
|           25 |     3035 | 2024-06-14 | timbermen        | L   | 0.469      | -            | -                | -                | -         |    -2.32 | brett, jason, nooz, PNDLM, sacrifice     |
|           24 |     3269 | 2024-06-08 | Perseverance     | W   | 0.426      | -            | -                | -                | -         |     2.99 | brett, jason, nooz, PNDLM, sacrifice     |
|           23 |     3360 | 2024-06-06 | Akimbo           | L   | 0.415      | -            | -                | -                | -         |    -5.33 | brett, jason, nooz, PNDLM, sacrifice     |
|           22 |     3378 | 2024-06-06 | NRG              | L   | 0.413      | -            | -                | -                | -         |    -3.76 | brett, jason, nooz, PNDLM, sacrifice     |
|           21 |     3393 | 2024-06-06 | M80              | L   | 0.413      | -            | -                | -                | -         |    -0.58 | brett, jason, nooz, PNDLM, sacrifice     |
|           20 |     3444 | 2024-06-05 | NRG              | L   | 0.407      | -            | -                | -                | -         |    -3.79 | brett, jason, nooz, PNDLM, sacrifice     |
|           19 |     3531 | 2024-06-03 | Akimbo           | W   | 0.393      | -            | -                | -                | -         |     1.66 | brett, jason, nooz, PNDLM, sacrifice     |
|           18 |     3840 | 2024-05-21 | Nouns            | L   | 0.309      | -            | -                | -                | -         |    -1.31 | brett, jason, nooz, PNDLM, sacrifice     |
|           17 |     3843 | 2024-05-21 | Nouns            | L   | 0.308      | -            | -                | -                | -         |    -1.32 | brett, jason, nooz, PNDLM, sacrifice     |
|           16 |     3880 | 2024-05-20 | Phoenix          | W   | 0.302      | -            | -                | -                | -         |     4.08 | brett, jason, nooz, PNDLM, sacrifice     |
|           15 |     3885 | 2024-05-20 | Phoenix          | L   | 0.301      | -            | -                | -                | -         |    -5.52 | brett, jason, nooz, PNDLM, sacrifice     |
|           14 |     3920 | 2024-05-19 | Nouns            | L   | 0.294      | -            | -                | -                | -         |    -1.29 | brett, jason, nooz, PNDLM, sacrifice     |
|           13 |     3974 | 2024-05-17 | timbermen        | L   | 0.282      | -            | -                | -                | -         |    -1.40 | brett, jason, nooz, PNDLM, sacrifice     |
|           12 |     3975 | 2024-05-17 | timbermen        | L   | 0.281      | -            | -                | -                | -         |    -1.42 | brett, jason, nooz, PNDLM, sacrifice     |
|           11 |     4007 | 2024-05-16 | Party Astronauts | L   | 0.275      | -            | -                | -                | -         |    -4.48 | brett, jason, nooz, PNDLM, sacrifice     |
|           10 |     4010 | 2024-05-16 | Party Astronauts | L   | 0.275      | -            | -                | -                | -         |    -4.58 | brett, jason, nooz, PNDLM, sacrifice     |
|            9 |     4044 | 2024-05-15 | MIGHT            | W   | 0.268      | -            | -                | -                | -         |     1.59 | brett, jason, nooz, PNDLM, sacrifice     |
|            8 |     4050 | 2024-05-15 | MIGHT            | W   | 0.268      | -            | -                | -                | -         |     1.61 | brett, jason, nooz, PNDLM, sacrifice     |
|            7 |     4099 | 2024-05-14 | Wildcard         | L   | 0.262      | -            | -                | -                | -         |    -1.88 | ayy, jason, nooz, PNDLM, sacrifice       |
|            6 |     4103 | 2024-05-14 | Wildcard         | L   | 0.262      | -            | -                | -                | -         |    -1.91 | ayy, jason, nooz, PNDLM, sacrifice       |
|            5 |     4241 | 2024-05-09 | Limitless        | W   | 0.229      | -            | -                | -                | -         |     2.22 | ayy, jason, nooz, PNDLM, sacrifice       |
|            4 |     4243 | 2024-05-09 | Limitless        | L   | 0.228      | -            | -                | -                | -         |    -5.05 | ayy, jason, nooz, PNDLM, sacrifice       |
|            3 |     4622 | 2024-04-21 | For Fun          | W   | 0.109      | -            | -                | -                | 1 (0.109) |     0.98 | ayy, brett, Fr3nk1e, jason, PNDLM        |
|            2 |     4624 | 2024-04-21 | Will to Win      | W   | 0.108      | -            | -                | -                | 1 (0.108) |     0.66 | ayy, brett, Fr3nk1e, jason, PNDLM        |
|            1 |     4931 | 2024-04-10 | Take Flyte       | W   | 0.035      | -            | -                | -                | -         |     0.61 | ayy, jason, nooz, PNDLM, sacrifice       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($998.68)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.435 | $1,200.00      | $522.22         |
| 2024-04-21 |      0.109 | $4,357.00      | $476.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
