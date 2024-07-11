### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, jason, nooz, PNDLM, sacrifice<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [139](../standings_global.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
Final Rank Value:  755.1<br />
<br />
Final Rank Value (755.1) = Starting Rank Value (839.9) + Head To Head Adjustments (-84.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.153[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 839.9
- 400 + ( ( 0.209 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 839.9


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
|           38 |      204 | 2024-06-14 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -5.50 | brett, jason, nooz, PNDLM, sacrifice   |
|           37 |      438 | 2024-06-08 | Perseverance     | W   | 0.980      | 0.371        | -                | 0.079 (0.029)    | 0 (0.000) |     6.93 | brett, jason, nooz, PNDLM, sacrifice   |
|           36 |      529 | 2024-06-06 | OMiT             | L   | 0.969      | -            | -                | -                | -         |   -12.31 | brett, jason, nooz, PNDLM, sacrifice   |
|           35 |      547 | 2024-06-06 | NRG              | L   | 0.967      | -            | -                | -                | -         |    -7.76 | brett, jason, nooz, PNDLM, sacrifice   |
|           34 |      562 | 2024-06-06 | M80              | L   | 0.967      | -            | -                | -                | -         |    -1.80 | brett, jason, nooz, PNDLM, sacrifice   |
|           33 |      613 | 2024-06-05 | NRG              | L   | 0.961      | -            | -                | -                | -         |    -8.28 | brett, jason, nooz, PNDLM, sacrifice   |
|           32 |      700 | 2024-06-03 | Akimbo           | W   | 0.947      | 0.371        | 0.005 (0.002)    | 0.097 (0.034)    | 0 (0.000) |    11.41 | brett, jason, nooz, PNDLM, sacrifice   |
|           31 |     1009 | 2024-05-21 | Nouns            | L   | 0.863      | -            | -                | -                | -         |    -5.20 | brett, jason, nooz, PNDLM, sacrifice   |
|           30 |     1012 | 2024-05-21 | Nouns            | L   | 0.862      | -            | -                | -                | -         |    -5.45 | brett, jason, nooz, PNDLM, sacrifice   |
|           29 |     1049 | 2024-05-20 | Take Flyte       | W   | 0.856      | 0.477        | 0.006 (0.002)    | 0.283 (0.115)    | 0 (0.000) |    14.59 | brett, jason, nooz, PNDLM, sacrifice   |
|           28 |     1054 | 2024-05-20 | Take Flyte       | L   | 0.855      | -            | -                | -                | -         |   -12.42 | brett, jason, nooz, PNDLM, sacrifice   |
|           27 |     1089 | 2024-05-19 | Nouns            | L   | 0.848      | -            | -                | -                | -         |    -5.58 | brett, jason, nooz, PNDLM, sacrifice   |
|           26 |     1143 | 2024-05-17 | Elevate          | L   | 0.836      | -            | -                | -                | -         |    -5.02 | brett, jason, nooz, PNDLM, sacrifice   |
|           25 |     1144 | 2024-05-17 | Elevate          | L   | 0.835      | -            | -                | -                | -         |    -5.26 | brett, jason, nooz, PNDLM, sacrifice   |
|           24 |     1176 | 2024-05-16 | Party Astronauts | L   | 0.829      | -            | -                | -                | -         |    -6.80 | brett, jason, nooz, PNDLM, sacrifice   |
|           23 |     1179 | 2024-05-16 | Party Astronauts | L   | 0.829      | -            | -                | -                | -         |    -7.20 | brett, jason, nooz, PNDLM, sacrifice   |
|           22 |     1213 | 2024-05-15 | MIGHT            | W   | 0.822      | 0.477        | -                | 0.089 (0.035)    | 0 (0.000) |     4.93 | brett, jason, nooz, PNDLM, sacrifice   |
|           21 |     1219 | 2024-05-15 | MIGHT            | W   | 0.822      | 0.477        | -                | 0.089 (0.035)    | 0 (0.000) |     5.17 | brett, jason, nooz, PNDLM, sacrifice   |
|           20 |     1268 | 2024-05-14 | Wildcard         | L   | 0.816      | -            | -                | -                | -         |    -7.16 | ayy, jason, nooz, PNDLM, sacrifice     |
|           19 |     1272 | 2024-05-14 | Wildcard         | L   | 0.816      | -            | -                | -                | -         |    -7.59 | ayy, jason, nooz, PNDLM, sacrifice     |
|           18 |     1410 | 2024-05-09 | Limitless        | W   | 0.783      | 0.477        | 0.002 (0.001)    | 0.225 (0.084)    | 0 (0.000) |     7.91 | ayy, jason, nooz, PNDLM, sacrifice     |
|           17 |     1412 | 2024-05-09 | Limitless        | L   | 0.782      | -            | -                | -                | -         |   -17.18 | ayy, jason, nooz, PNDLM, sacrifice     |
|           16 |     1791 | 2024-04-21 | For Fun          | W   | 0.663      | 0.319        | 0.006 (0.001)    | -                | 1 (0.663) |     7.03 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           15 |     1793 | 2024-04-21 | Will to Win      | W   | 0.662      | 0.319        | 0.001 (0.000)    | -                | 1 (0.662) |     3.50 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           14 |     2095 | 2024-04-10 | One More         | L   | 0.589      | -            | -                | -                | -         |   -12.03 | ayy, intra, jason, PNDLM, sacrifice    |
|           13 |     2100 | 2024-04-10 | One More         | W   | 0.589      | 0.477        | 0.003 (0.001)    | 0.219 (0.062)    | 0 (0.000) |     6.58 | ayy, jason, nooz, PNDLM, sacrifice     |
|           12 |     2287 | 2024-04-04 | BOSS             | L   | 0.549      | -            | -                | -                | -         |    -8.58 | ayy, intra, jason, nooz, sacrifice     |
|           11 |     2293 | 2024-04-04 | BOSS             | L   | 0.549      | -            | -                | -                | -         |    -9.00 | ayy, intra, jason, PNDLM, sacrifice    |
|           10 |     2681 | 2024-03-15 | NRG              | L   | 0.416      | -            | -                | -                | -         |    -5.72 | ayy, intra, jason, PNDLM, sacrifice    |
|            9 |     2683 | 2024-03-15 | NRG              | W   | 0.416      | 0.477        | 0.026 (0.005)    | 0.478 (0.095)    | 0 (0.000) |     7.55 | ayy, intra, jason, PNDLM, sacrifice    |
|            8 |     2886 | 2024-03-07 | LAG              | L   | 0.363      | -            | -                | -                | -         |    -5.01 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            7 |     2887 | 2024-03-07 | LAG              | W   | 0.363      | 0.477        | 0.021 (0.004)    | 0.396 (0.068)    | -         |     6.55 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            6 |     3350 | 2024-02-16 | Mythic           | L   | 0.229      | -            | -                | -                | -         |    -3.26 | intra, jason, LEARSI, PNDLM, sacrifice |
|            5 |     3355 | 2024-02-16 | LAG              | W   | 0.228      | 0.143        | 0.021 (0.001)    | -                | -         |     4.27 | intra, jason, LEARSI, PNDLM, sacrifice |
|            4 |     3408 | 2024-02-14 | Mythic           | L   | 0.216      | -            | -                | -                | -         |    -3.12 | intra, jason, LEARSI, PNDLM, sacrifice |
|            3 |     3410 | 2024-02-14 | Mythic           | L   | 0.216      | -            | -                | -                | -         |    -3.17 | intra, jason, LEARSI, PNDLM, sacrifice |
|            2 |     3448 | 2024-02-13 | Carpe Diem       | L   | 0.209      | -            | -                | -                | -         |    -3.75 | intra, jason, LEARSI, PNDLM, sacrifice |
|            1 |     3452 | 2024-02-13 | Carpe Diem       | W   | 0.209      | 0.477        | 0.008 (0.001)    | 0.245 (0.024)    | -         |     2.88 | intra, jason, LEARSI, PNDLM, sacrifice |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,076.92)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.989 | $1,200.00      | $1,186.95       |
| 2024-04-21 |      0.663 | $4,357.00      | $2,889.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
