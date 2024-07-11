### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Fr3nk1e, Nifty, scar, Snakes<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [187](../standings_global.md)<br />
Regional Rank: [49]( ../standings_americas.md)<br />
Final Rank Value:  546.3<br />
<br />
Final Rank Value (546.3) = Starting Rank Value (553.7) + Head To Head Adjustments (-7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 553.7
- 400 + ( ( 0.073 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 553.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      964 | 2024-05-22 | Carpe Diem       | L   | 0.869      | -            | -                | -                | -         |    -4.92 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           32 |      971 | 2024-05-22 | Carpe Diem       | L   | 0.869      | -            | -                | -                | -         |    -5.16 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           31 |     1048 | 2024-05-20 | One More         | L   | 0.856      | -            | -                | -                | -         |    -8.82 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           30 |     1053 | 2024-05-20 | One More         | W   | 0.855      | 0.477        | 0.003 (0.001)    | 0.219 (0.089)    | 0 (0.000) |    18.59 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           29 |     1213 | 2024-05-15 | FLUFFY AIMERS    | L   | 0.822      | -            | -                | -                | -         |    -4.93 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           28 |     1219 | 2024-05-15 | FLUFFY AIMERS    | L   | 0.822      | -            | -                | -                | -         |    -5.17 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           27 |     1274 | 2024-05-14 | BOSS             | L   | 0.815      | -            | -                | -                | -         |    -4.25 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           26 |     1280 | 2024-05-14 | BOSS             | L   | 0.815      | -            | -                | -                | -         |    -4.43 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           25 |     1415 | 2024-05-09 | Wildcard         | L   | 0.782      | -            | -                | -                | -         |    -2.15 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           24 |     1419 | 2024-05-09 | Wildcard         | L   | 0.782      | -            | -                | -                | -         |    -2.20 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           23 |     1433 | 2024-05-08 | Elevate          | L   | 0.776      | -            | -                | -                | -         |    -1.64 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           22 |     1435 | 2024-05-08 | Elevate          | L   | 0.775      | -            | -                | -                | -         |    -1.67 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           21 |     2098 | 2024-04-10 | Take Flyte       | W   | 0.589      | 0.477        | 0.006 (0.002)    | 0.283 (0.079)    | 0 (0.000) |    14.60 | danss, djay, Nifty, scar, Snakes   |
|           20 |     2105 | 2024-04-10 | Take Flyte       | L   | 0.589      | -            | -                | -                | -         |    -3.90 | danss, djay, Nifty, scar, Snakes   |
|           19 |     2153 | 2024-04-09 | Nouns            | L   | 0.582      | -            | -                | -                | -         |    -1.45 | danss, djay, Louie, scar, Snakes   |
|           18 |     2156 | 2024-04-09 | Nouns            | L   | 0.582      | -            | -                | -                | -         |    -1.48 | danss, djay, Nifty, scar, Snakes   |
|           17 |     2283 | 2024-04-04 | Party Astronauts | L   | 0.549      | -            | -                | -                | -         |    -1.36 | danss, djay, Nifty, scar, Snakes   |
|           16 |     2291 | 2024-04-04 | Party Astronauts | L   | 0.549      | -            | -                | -                | -         |    -1.38 | danss, djay, Nifty, scar, Snakes   |
|           15 |     2459 | 2024-03-27 | Limitless        | L   | 0.496      | -            | -                | -                | -         |    -5.27 | danss, djay, Nifty, scar, Snakes   |
|           14 |     2466 | 2024-03-27 | Limitless        | L   | 0.496      | -            | -                | -                | -         |    -5.48 | danss, djay, Nifty, scar, Snakes   |
|           13 |     2510 | 2024-03-26 | NRG              | L   | 0.489      | -            | -                | -                | -         |    -2.26 | danss, djay, Nifty, scar, Snakes   |
|           12 |     2515 | 2024-03-26 | NRG              | L   | 0.489      | -            | -                | -                | -         |    -2.31 | danss, djay, Nifty, scar, Snakes   |
|           11 |     2915 | 2024-03-06 | LAG              | L   | 0.356      | -            | -                | -                | -         |    -1.74 | danss, djay, Nifty, scar, Snakes   |
|           10 |     2916 | 2024-03-06 | LAG              | W   | 0.356      | 0.477        | 0.021 (0.004)    | 0.396 (0.067)    | 0 (0.000) |     9.59 | danss, djay, Nifty, scar, Snakes   |
|            9 |     2953 | 2024-03-05 | Mythic           | W   | 0.349      | 0.477        | 0.014 (0.002)    | 0.359 (0.060)    | 0 (0.000) |     9.17 | danss, djay, Nifty, scar, Snakes   |
|            8 |     2955 | 2024-03-05 | Mythic           | W   | 0.349      | 0.477        | 0.014 (0.002)    | 0.359 (0.060)    | 0 (0.000) |     9.32 | danss, djay, Nifty, scar, Snakes   |
|            7 |     3206 | 2024-02-22 | Liquid           | L   | 0.269      | -            | -                | -                | -         |    -0.02 | danss, djay, Nifty, scar, Snakes   |
|            6 |     3207 | 2024-02-22 | Take Flyte       | W   | 0.268      | 0.143        | 0.006 (0.000)    | 0.283 (0.011)    | 0 (0.000) |     6.64 | danss, djay, Nifty, scar, Snakes   |
|            5 |     3354 | 2024-02-16 | Rocket           | L   | 0.228      | -            | -                | -                | -         |    -3.96 | danss, djay, Nifty, scar, Snakes   |
|            4 |     3994 | 2024-01-18 | Wildcard         | L   | 0.035      | -            | -                | -                | -         |    -0.10 | danss, djay, Louie, Nifty, scar    |
|            3 |     4044 | 2024-01-17 | Party Astronauts | W   | 0.029      | 0.143        | 0.062 (0.000)    | 0.589 (0.002)    | 0 (0.000) |     0.83 | danss, djay, Louie, Nifty, scar    |
|            2 |     4097 | 2024-01-16 | huge sweaty      | L   | 0.022      | -            | -                | -                | -         |    -0.48 | danss, djay, Louie, Nifty, scar    |
|            1 |     4142 | 2024-01-15 | Carpe Diem       | W   | 0.015      | 0.143        | 0.008 (0.000)    | 0.245 (0.001)    | 0 (0.000) |     0.39 | danss, djay, Louie, Nifty, scar    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
