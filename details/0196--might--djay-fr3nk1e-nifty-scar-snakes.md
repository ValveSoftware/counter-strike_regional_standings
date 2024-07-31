### Roster Details<br />
Team Name: MIGHT<br />
Roster: djay, Fr3nk1e, Nifty, scar, Snakes<br />
Global Rank: [196](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [55]( ../standings_americas.md)<br />
<br />
Final Rank Value:  516.3<br />
<br />
Final Rank Value (516.3) = Starting Rank Value (532.1) + Head To Head Adjustments (-15.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 532.1
- 400 + ( ( 0.064 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 532.1


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
|           29 |     1658 | 2024-05-22 | Limitless        | L   | 0.735      | -            | -                | -                | -         |    -4.14 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           28 |     1665 | 2024-05-22 | Limitless        | L   | 0.735      | -            | -                | -                | -         |    -4.30 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           27 |     1742 | 2024-05-20 | Take Flyte       | L   | 0.722      | -            | -                | -                | -         |    -7.07 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           26 |     1747 | 2024-05-20 | Take Flyte       | W   | 0.721      | 0.477        | 0.002 (0.001)    | 0.241 (0.083)    | 0 (0.000) |    16.07 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           25 |     1907 | 2024-05-15 | FLUFFY AIMERS    | L   | 0.688      | -            | -                | -                | -         |    -5.08 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           24 |     1913 | 2024-05-15 | FLUFFY AIMERS    | L   | 0.688      | -            | -                | -                | -         |    -5.32 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           23 |     1968 | 2024-05-14 | BOSS             | L   | 0.681      | -            | -                | -                | -         |    -3.65 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           22 |     1974 | 2024-05-14 | BOSS             | L   | 0.681      | -            | -                | -                | -         |    -3.77 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           21 |     2109 | 2024-05-09 | Wildcard         | L   | 0.648      | -            | -                | -                | -         |    -2.04 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           20 |     2113 | 2024-05-09 | Wildcard         | L   | 0.648      | -            | -                | -                | -         |    -2.08 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           19 |     2127 | 2024-05-08 | Elevate          | L   | 0.642      | -            | -                | -                | -         |    -1.51 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           18 |     2129 | 2024-05-08 | Elevate          | L   | 0.641      | -            | -                | -                | -         |    -1.54 | djay, Fr3nk1e, Nifty, scar, Snakes |
|           17 |     2792 | 2024-04-10 | Perseverance     | W   | 0.455      | 0.477        | 0.004 (0.001)    | 0.248 (0.054)    | 0 (0.000) |    11.06 | danss, djay, Nifty, scar, Snakes   |
|           16 |     2799 | 2024-04-10 | Perseverance     | L   | 0.455      | -            | -                | -                | -         |    -3.27 | danss, djay, Nifty, scar, Snakes   |
|           15 |     2847 | 2024-04-09 | Nouns            | L   | 0.448      | -            | -                | -                | -         |    -1.42 | danss, djay, Louie, scar, Snakes   |
|           14 |     2850 | 2024-04-09 | Nouns            | L   | 0.448      | -            | -                | -                | -         |    -1.44 | danss, djay, Nifty, scar, Snakes   |
|           13 |     2977 | 2024-04-04 | Party Astronauts | L   | 0.415      | -            | -                | -                | -         |    -1.20 | danss, djay, Nifty, scar, Snakes   |
|           12 |     2985 | 2024-04-04 | Party Astronauts | L   | 0.415      | -            | -                | -                | -         |    -1.22 | danss, djay, Nifty, scar, Snakes   |
|           11 |     3153 | 2024-03-27 | Limitless        | L   | 0.362      | -            | -                | -                | -         |    -3.88 | danss, djay, Nifty, scar, Snakes   |
|           10 |     3160 | 2024-03-27 | Limitless        | L   | 0.362      | -            | -                | -                | -         |    -3.99 | danss, djay, Nifty, scar, Snakes   |
|            9 |     3204 | 2024-03-26 | NRG              | L   | 0.355      | -            | -                | -                | -         |    -1.74 | danss, djay, Nifty, scar, Snakes   |
|            8 |     3209 | 2024-03-26 | NRG              | L   | 0.355      | -            | -                | -                | -         |    -1.77 | danss, djay, Nifty, scar, Snakes   |
|            7 |     3609 | 2024-03-06 | LAG              | L   | 0.222      | -            | -                | -                | -         |    -1.06 | danss, djay, Nifty, scar, Snakes   |
|            6 |     3610 | 2024-03-06 | LAG              | W   | 0.222      | 0.477        | 0.013 (0.001)    | 0.344 (0.036)    | 0 (0.000) |     5.97 | danss, djay, Nifty, scar, Snakes   |
|            5 |     3647 | 2024-03-05 | Mythic           | W   | 0.215      | 0.477        | 0.010 (0.001)    | 0.266 (0.027)    | 0 (0.000) |     5.45 | danss, djay, Nifty, scar, Snakes   |
|            4 |     3649 | 2024-03-05 | Mythic           | W   | 0.215      | 0.477        | 0.010 (0.001)    | 0.266 (0.027)    | 0 (0.000) |     5.51 | danss, djay, Nifty, scar, Snakes   |
|            3 |     3900 | 2024-02-22 | Liquid           | L   | 0.134      | -            | -                | -                | -         |    -0.02 | danss, djay, Nifty, scar, Snakes   |
|            2 |     3901 | 2024-02-22 | Perseverance     | W   | 0.134      | 0.143        | 0.004 (0.000)    | 0.248 (0.005)    | 0 (0.000) |     3.23 | danss, djay, Nifty, scar, Snakes   |
|            1 |     4048 | 2024-02-16 | Rocket           | L   | 0.094      | -            | -                | -                | -         |    -1.64 | danss, djay, Nifty, scar, Snakes   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
