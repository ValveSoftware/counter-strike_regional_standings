### Roster Details<br />
Team Name: Raccoons<br />
Roster: CYPHER, Ex3rcice, hades, nexa, yxngstxr<br />
Global Rank: [275](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [185]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  594.9<br />
<br />
Final Rank Value (594.9) = Starting Rank Value (554.2) + Head To Head Adjustments (40.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.082<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 554.2
- 400 + ( ( 0.082 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 554.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     2758 | 2026-08-30 | Eternal Fire     | L   | 0.774      | -            | -                | -                | -         |    -0.26 | CYPHER, dycha, Ex3rcice, hades, nexa    |
|            8 |     2792 | 2026-08-30 | BARCA            | L   | 0.772      | -            | -                | -                | -         |    -0.89 | CYPHER, dycha, Ex3rcice, hades, nexa    |
|            7 |     3032 | 2026-08-25 | Mai Tai          | L   | 0.739      | -            | -                | -                | -         |   -12.78 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            6 |     3094 | 2026-08-23 | Vexar            | L   | 0.725      | -            | -                | -                | -         |    -6.57 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            5 |     3167 | 2026-08-20 | Bushido Wildcats | L   | 0.705      | -            | -                | -                | -         |    -1.91 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            4 |     3192 | 2026-08-19 | Black Phoenix    | W   | 0.699      | 0.371        | 0.059 (0.015)    | 1.000 (0.259)    | 0 (0.000) |    21.25 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            3 |     3233 | 2026-08-17 | Fire Flux        | W   | 0.686      | 0.333        | 0.036 (0.008)    | 0.675 (0.155)    | 0 (0.000) |    17.07 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            2 |     3354 | 2026-08-13 | ROUNDS           | W   | 0.660      | 0.333        | 0.000 (0.000)    | 0.104 (0.023)    | 0 (0.000) |     9.22 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            1 |     3375 | 2026-08-12 | Vexar            | W   | 0.653      | 0.333        | 0.001 (0.000)    | 0.441 (0.096)    | 0 (0.000) |    15.58 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
