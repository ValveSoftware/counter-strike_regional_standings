### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Fr3nk1e, Nifty, scar, Snakes<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [194](../standings_global.md)<br />
Regional Rank: [53]( ../standings_americas.md)<br />
Final Rank Value:  522.7<br />
<br />
Final Rank Value (522.7) = Starting Rank Value (536.7) + Head To Head Adjustments (-14.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 536.7
- 400 + ( ( 0.068 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 536.7


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
|           29 |     1416 | 2024-05-22 | Limitless        | L   | 0.782      | -            | -                | -                | -         |    -4.26 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           28 |     1423 | 2024-05-22 | Limitless        | L   | 0.782      | -            | -                | -                | -         |    -4.43 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           27 |     1500 | 2024-05-20 | Take Flyte       | L   | 0.769      | -            | -                | -                | -         |    -7.58 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           26 |     1505 | 2024-05-20 | Take Flyte       | W   | 0.769      | 0.477        | 0.003 (0.001)    | 0.228 (0.084)    | 0 (0.000) |    17.08 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           25 |     1665 | 2024-05-15 | FLUFFY AIMERS    | L   | 0.736      | -            | -                | -                | -         |    -5.75 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           24 |     1671 | 2024-05-15 | FLUFFY AIMERS    | L   | 0.735      | -            | -                | -                | -         |    -6.04 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           23 |     1726 | 2024-05-14 | BOSS             | L   | 0.729      | -            | -                | -                | -         |    -3.75 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           22 |     1732 | 2024-05-14 | BOSS             | L   | 0.728      | -            | -                | -                | -         |    -3.88 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           21 |     1867 | 2024-05-09 | Wildcard         | L   | 0.695      | -            | -                | -                | -         |    -2.02 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           20 |     1871 | 2024-05-09 | Wildcard         | L   | 0.695      | -            | -                | -                | -         |    -2.06 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           19 |     1885 | 2024-05-08 | Elevate          | L   | 0.689      | -            | -                | -                | -         |    -1.50 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           18 |     1887 | 2024-05-08 | Elevate          | L   | 0.689      | -            | -                | -                | -         |    -1.52 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           17 |     2550 | 2024-04-10 | Perseverance     | W   | 0.502      | 0.477        | 0.005 (0.001)    | 0.243 (0.058)    | 0 (0.000) |    12.27 | danss, djay, Nifty, scar, Snakes   |
|           16 |     2557 | 2024-04-10 | Perseverance     | L   | 0.502      | -            | -                | -                | -         |    -3.53 | danss, djay, Nifty, scar, Snakes   |
|           15 |     2605 | 2024-04-09 | Nouns            | L   | 0.496      | -            | -                | -                | -         |    -1.53 | danss, djay, Louie, scar, Snakes   |
|           14 |     2608 | 2024-04-09 | Nouns            | L   | 0.495      | -            | -                | -                | -         |    -1.55 | danss, djay, Nifty, scar, Snakes   |
|           13 |     2735 | 2024-04-04 | Party Astronauts | L   | 0.462      | -            | -                | -                | -         |    -1.31 | danss, djay, Nifty, scar, Snakes   |
|           12 |     2743 | 2024-04-04 | Party Astronauts | L   | 0.462      | -            | -                | -                | -         |    -1.33 | danss, djay, Nifty, scar, Snakes   |
|           11 |     2911 | 2024-03-27 | Limitless        | L   | 0.409      | -            | -                | -                | -         |    -4.43 | danss, djay, Nifty, scar, Snakes   |
|           10 |     2918 | 2024-03-27 | Limitless        | L   | 0.409      | -            | -                | -                | -         |    -4.58 | danss, djay, Nifty, scar, Snakes   |
|            9 |     2962 | 2024-03-26 | NRG              | L   | 0.402      | -            | -                | -                | -         |    -1.92 | danss, djay, Nifty, scar, Snakes   |
|            8 |     2967 | 2024-03-26 | NRG              | L   | 0.402      | -            | -                | -                | -         |    -1.96 | danss, djay, Nifty, scar, Snakes   |
|            7 |     3367 | 2024-03-06 | LAG              | L   | 0.269      | -            | -                | -                | -         |    -1.21 | danss, djay, Nifty, scar, Snakes   |
|            6 |     3368 | 2024-03-06 | LAG              | W   | 0.269      | 0.477        | 0.017 (0.002)    | 0.385 (0.049)    | 0 (0.000) |     7.33 | danss, djay, Nifty, scar, Snakes   |
|            5 |     3405 | 2024-03-05 | Mythic           | W   | 0.263      | 0.477        | 0.012 (0.002)    | 0.310 (0.039)    | 0 (0.000) |     6.71 | danss, djay, Nifty, scar, Snakes   |
|            4 |     3407 | 2024-03-05 | Mythic           | W   | 0.262      | 0.477        | 0.012 (0.002)    | 0.310 (0.039)    | 0 (0.000) |     6.80 | danss, djay, Nifty, scar, Snakes   |
|            3 |     3658 | 2024-02-22 | Liquid           | L   | 0.182      | -            | -                | -                | -         |    -0.04 | danss, djay, Nifty, scar, Snakes   |
|            2 |     3659 | 2024-02-22 | Perseverance     | W   | 0.181      | 0.143        | 0.005 (0.000)    | 0.243 (0.006)    | 0 (0.000) |     4.40 | danss, djay, Nifty, scar, Snakes   |
|            1 |     3806 | 2024-02-16 | Rocket           | L   | 0.141      | -            | -                | -                | -         |    -2.44 | danss, djay, Nifty, scar, Snakes   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
