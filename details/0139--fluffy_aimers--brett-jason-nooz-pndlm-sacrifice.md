### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, jason, nooz, PNDLM, sacrifice<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [139](../standings_global.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
Final Rank Value:  741.7<br />
<br />
Final Rank Value (741.7) = Starting Rank Value (847.0) + Head To Head Adjustments (-105.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 847.0
- 400 + ( ( 0.220 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 847.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       68 | 2024-06-14 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -6.35 | brett, jason, nooz, PNDLM, sacrifice   |
|           37 |      302 | 2024-06-08 | Perseverance     | W   | 1.000      | 0.384        | -                | 0.071 (0.027)    | 0 (0.000) |     7.33 | brett, jason, nooz, PNDLM, sacrifice   |
|           36 |      393 | 2024-06-06 | OMiT             | L   | 1.000      | -            | -                | -                | -         |   -12.42 | brett, jason, nooz, PNDLM, sacrifice   |
|           35 |      411 | 2024-06-06 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.70 | brett, jason, nooz, PNDLM, sacrifice   |
|           34 |      426 | 2024-06-06 | M80              | L   | 1.000      | -            | -                | -                | -         |    -1.76 | brett, jason, nooz, PNDLM, sacrifice   |
|           33 |      477 | 2024-06-05 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -8.28 | brett, jason, nooz, PNDLM, sacrifice   |
|           32 |      564 | 2024-06-03 | Akimbo           | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.102 (0.039)    | 0 (0.000) |    12.39 | brett, jason, nooz, PNDLM, sacrifice   |
|           31 |      875 | 2024-05-21 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -5.92 | brett, jason, nooz, PNDLM, sacrifice   |
|           30 |      878 | 2024-05-21 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -6.26 | brett, jason, nooz, PNDLM, sacrifice   |
|           29 |      915 | 2024-05-20 | Take Flyte       | W   | 1.000      | 0.477        | 0.005 (0.003)    | 0.306 (0.146)    | 0 (0.000) |    17.38 | brett, jason, nooz, PNDLM, sacrifice   |
|           28 |      920 | 2024-05-20 | Take Flyte       | L   | 1.000      | -            | -                | -                | -         |   -13.98 | brett, jason, nooz, PNDLM, sacrifice   |
|           27 |      955 | 2024-05-19 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -6.52 | brett, jason, nooz, PNDLM, sacrifice   |
|           26 |     1009 | 2024-05-17 | Elevate          | L   | 0.991      | -            | -                | -                | -         |    -7.68 | brett, jason, nooz, PNDLM, sacrifice   |
|           25 |     1010 | 2024-05-17 | Elevate          | L   | 0.991      | -            | -                | -                | -         |    -8.21 | brett, jason, nooz, PNDLM, sacrifice   |
|           24 |     1042 | 2024-05-16 | Party Astronauts | L   | 0.985      | -            | -                | -                | -         |    -8.42 | brett, jason, nooz, PNDLM, sacrifice   |
|           23 |     1045 | 2024-05-16 | Party Astronauts | L   | 0.984      | -            | -                | -                | -         |    -9.03 | brett, jason, nooz, PNDLM, sacrifice   |
|           22 |     1079 | 2024-05-15 | MIGHT            | W   | 0.978      | 0.477        | -                | 0.111 (0.052)    | 0 (0.000) |     6.19 | brett, jason, nooz, PNDLM, sacrifice   |
|           21 |     1085 | 2024-05-15 | MIGHT            | W   | 0.978      | 0.477        | -                | 0.111 (0.052)    | 0 (0.000) |     6.55 | brett, jason, nooz, PNDLM, sacrifice   |
|           20 |     1134 | 2024-05-14 | Wildcard         | L   | 0.971      | -            | -                | -                | -         |    -8.36 | ayy, jason, nooz, PNDLM, sacrifice     |
|           19 |     1138 | 2024-05-14 | Wildcard         | L   | 0.971      | -            | -                | -                | -         |    -8.96 | ayy, jason, nooz, PNDLM, sacrifice     |
|           18 |     1276 | 2024-05-09 | Limitless        | W   | 0.938      | 0.477        | 0.001 (0.001)    | 0.227 (0.101)    | 0 (0.000) |     9.38 | ayy, jason, nooz, PNDLM, sacrifice     |
|           17 |     1278 | 2024-05-09 | Limitless        | L   | 0.938      | -            | -                | -                | -         |   -20.65 | ayy, jason, nooz, PNDLM, sacrifice     |
|           16 |     1657 | 2024-04-21 | For Fun          | W   | 0.819      | 0.319        | 0.006 (0.002)    | -                | 1 (0.819) |     8.42 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           15 |     1659 | 2024-04-21 | Will to Win      | W   | 0.817      | 0.319        | 0.001 (0.000)    | -                | 1 (0.817) |     4.30 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           14 |     1961 | 2024-04-10 | One More         | L   | 0.745      | -            | -                | -                | -         |   -15.39 | ayy, intra, jason, PNDLM, sacrifice    |
|           13 |     1966 | 2024-04-10 | One More         | W   | 0.745      | 0.477        | 0.003 (0.001)    | 0.224 (0.079)    | 0 (0.000) |     8.03 | ayy, jason, nooz, PNDLM, sacrifice     |
|           12 |     2153 | 2024-04-04 | BOSS             | L   | 0.704      | -            | -                | -                | -         |   -10.97 | ayy, intra, jason, nooz, sacrifice     |
|           11 |     2159 | 2024-04-04 | BOSS             | L   | 0.704      | -            | -                | -                | -         |   -11.68 | ayy, intra, jason, PNDLM, sacrifice    |
|           10 |     2548 | 2024-03-15 | NRG              | L   | 0.572      | -            | -                | -                | -         |    -7.99 | ayy, intra, jason, PNDLM, sacrifice    |
|            9 |     2550 | 2024-03-15 | NRG              | W   | 0.571      | 0.477        | 0.024 (0.006)    | 0.507 (0.138)    | 0 (0.000) |    10.27 | ayy, intra, jason, PNDLM, sacrifice    |
|            8 |     2753 | 2024-03-07 | LAG              | L   | 0.519      | -            | -                | -                | -         |    -7.12 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            7 |     2754 | 2024-03-07 | LAG              | W   | 0.518      | 0.477        | 0.021 (0.005)    | 0.421 (0.104)    | -         |     9.44 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            6 |     3217 | 2024-02-16 | Mythic           | L   | 0.385      | -            | -                | -                | -         |    -5.48 | intra, jason, LEARSI, PNDLM, sacrifice |
|            5 |     3222 | 2024-02-16 | LAG              | W   | 0.384      | 0.143        | 0.021 (0.001)    | -                | -         |     7.39 | intra, jason, LEARSI, PNDLM, sacrifice |
|            4 |     3275 | 2024-02-14 | Mythic           | L   | 0.372      | -            | -                | -                | -         |    -5.42 | intra, jason, LEARSI, PNDLM, sacrifice |
|            3 |     3277 | 2024-02-14 | Mythic           | L   | 0.371      | -            | -                | -                | -         |    -5.59 | intra, jason, LEARSI, PNDLM, sacrifice |
|            2 |     3315 | 2024-02-13 | Carpe Diem       | L   | 0.365      | -            | -                | -                | -         |    -6.88 | intra, jason, LEARSI, PNDLM, sacrifice |
|            1 |     3319 | 2024-02-13 | Carpe Diem       | W   | 0.365      | 0.477        | 0.007 (0.001)    | 0.278 (0.048)    | -         |     4.69 | intra, jason, LEARSI, PNDLM, sacrifice |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,768.24)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,200.00      | $1,200.00       |
| 2024-04-21 |      0.819 | $4,357.00      | $3,568.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
