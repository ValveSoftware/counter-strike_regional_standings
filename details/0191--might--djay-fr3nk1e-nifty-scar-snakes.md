### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Fr3nk1e, Nifty, scar, Snakes<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [191](../standings_global.md)<br />
Regional Rank: [51]( ../standings_americas.md)<br />
Final Rank Value:  551.8<br />
<br />
Final Rank Value (551.8) = Starting Rank Value (561.8) + Head To Head Adjustments (-10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.054[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.080<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 561.8
- 400 + ( ( 0.080 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 561.8


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
|           33 |      830 | 2024-05-22 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |    -6.03 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           32 |      837 | 2024-05-22 | Carpe Diem       | L   | 1.000      | -            | -                | -                | -         |    -6.38 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           31 |      914 | 2024-05-20 | One More         | L   | 1.000      | -            | -                | -                | -         |   -11.03 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           30 |      919 | 2024-05-20 | One More         | W   | 1.000      | 0.477        | 0.003 (0.001)    | 0.224 (0.107)    | 0 (0.000) |    20.88 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           29 |     1079 | 2024-05-15 | FLUFFY AIMERS    | L   | 0.978      | -            | -                | -                | -         |    -6.19 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           28 |     1085 | 2024-05-15 | FLUFFY AIMERS    | L   | 0.978      | -            | -                | -                | -         |    -6.55 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           27 |     1140 | 2024-05-14 | BOSS             | L   | 0.971      | -            | -                | -                | -         |    -5.25 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           26 |     1146 | 2024-05-14 | BOSS             | L   | 0.971      | -            | -                | -                | -         |    -5.52 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           25 |     1281 | 2024-05-09 | Wildcard         | L   | 0.938      | -            | -                | -                | -         |    -2.67 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           24 |     1285 | 2024-05-09 | Wildcard         | L   | 0.938      | -            | -                | -                | -         |    -2.75 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           23 |     1299 | 2024-05-08 | Elevate          | L   | 0.931      | -            | -                | -                | -         |    -3.56 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           22 |     1301 | 2024-05-08 | Elevate          | L   | 0.931      | -            | -                | -                | -         |    -3.69 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           21 |     1964 | 2024-04-10 | Take Flyte       | W   | 0.745      | 0.477        | 0.005 (0.002)    | 0.306 (0.109)    | 0 (0.000) |    18.09 | danss, djay, Nifty, scar, Snakes   |
|           20 |     1971 | 2024-04-10 | Take Flyte       | L   | 0.744      | -            | -                | -                | -         |    -5.21 | danss, djay, Nifty, scar, Snakes   |
|           19 |     2019 | 2024-04-09 | Nouns            | L   | 0.738      | -            | -                | -                | -         |    -2.02 | danss, djay, Louie, scar, Snakes   |
|           18 |     2022 | 2024-04-09 | Nouns            | L   | 0.738      | -            | -                | -                | -         |    -2.06 | danss, djay, Nifty, scar, Snakes   |
|           17 |     2149 | 2024-04-04 | Party Astronauts | L   | 0.705      | -            | -                | -                | -         |    -2.04 | danss, djay, Nifty, scar, Snakes   |
|           16 |     2157 | 2024-04-04 | Party Astronauts | L   | 0.704      | -            | -                | -                | -         |    -2.09 | danss, djay, Nifty, scar, Snakes   |
|           15 |     2326 | 2024-03-27 | Limitless        | L   | 0.652      | -            | -                | -                | -         |    -7.48 | danss, djay, Nifty, scar, Snakes   |
|           14 |     2333 | 2024-03-27 | Limitless        | L   | 0.651      | -            | -                | -                | -         |    -7.89 | danss, djay, Nifty, scar, Snakes   |
|           13 |     2377 | 2024-03-26 | NRG              | L   | 0.645      | -            | -                | -                | -         |    -3.29 | danss, djay, Nifty, scar, Snakes   |
|           12 |     2382 | 2024-03-26 | NRG              | L   | 0.645      | -            | -                | -                | -         |    -3.40 | danss, djay, Nifty, scar, Snakes   |
|           11 |     2782 | 2024-03-06 | LAG              | L   | 0.512      | -            | -                | -                | -         |    -2.71 | danss, djay, Nifty, scar, Snakes   |
|           10 |     2783 | 2024-03-06 | LAG              | W   | 0.511      | 0.477        | 0.021 (0.005)    | 0.421 (0.103)    | 0 (0.000) |    13.63 | danss, djay, Nifty, scar, Snakes   |
|            9 |     2820 | 2024-03-05 | Mythic           | W   | 0.505      | 0.477        | 0.013 (0.003)    | 0.377 (0.091)    | 0 (0.000) |    12.94 | danss, djay, Nifty, scar, Snakes   |
|            8 |     2822 | 2024-03-05 | Mythic           | W   | 0.505      | 0.477        | 0.013 (0.003)    | 0.377 (0.091)    | 0 (0.000) |    13.27 | danss, djay, Nifty, scar, Snakes   |
|            7 |     3073 | 2024-02-22 | Liquid           | L   | 0.424      | -            | -                | -                | -         |    -0.03 | danss, djay, Nifty, scar, Snakes   |
|            6 |     3074 | 2024-02-22 | Take Flyte       | W   | 0.424      | 0.143        | 0.005 (0.000)    | 0.306 (0.019)    | 0 (0.000) |    10.35 | danss, djay, Nifty, scar, Snakes   |
|            5 |     3221 | 2024-02-16 | Rocket           | L   | 0.384      | -            | -                | -                | -         |    -6.33 | danss, djay, Nifty, scar, Snakes   |
|            4 |     3861 | 2024-01-18 | Wildcard         | L   | 0.191      | -            | -                | -                | -         |    -0.57 | danss, djay, Louie, Nifty, scar    |
|            3 |     3911 | 2024-01-17 | Party Astronauts | W   | 0.184      | 0.143        | 0.055 (0.001)    | 0.600 (0.016)    | 0 (0.000) |     5.29 | danss, djay, Louie, Nifty, scar    |
|            2 |     3964 | 2024-01-16 | huge sweaty      | L   | 0.177      | -            | -                | -                | -         |    -4.00 | danss, djay, Louie, Nifty, scar    |
|            1 |     4009 | 2024-01-15 | Carpe Diem       | W   | 0.171      | 0.143        | 0.007 (0.000)    | 0.278 (0.007)    | 0 (0.000) |     4.24 | danss, djay, Louie, Nifty, scar    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
