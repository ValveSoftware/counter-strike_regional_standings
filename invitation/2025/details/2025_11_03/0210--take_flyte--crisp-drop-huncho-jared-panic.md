### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, Drop, huncho, jared, Panic<br />
Global Rank: [210](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [64]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  585.0<br />
<br />
Final Rank Value (585.0) = Starting Rank Value (548.0) + Head To Head Adjustments (37.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.079<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 548.0
- 400 + ( ( 0.079 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 548.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      470 | 2025-10-09 | ex-Chicken Coop   | L   | 1.000      | -            | -                | -                | -         |    -9.93 | Crisp, Drop, huncho, jared, Panic    |
|           12 |      520 | 2025-10-08 | InControl         | W   | 1.000      | 0.363        | 0.002 (0.001)    | 0.186 (0.067)    | 0 (0.000) |    18.91 | Crisp, Drop, huncho, jared, Panic    |
|           11 |      577 | 2025-10-07 | anything else     | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.112 (0.041)    | 0 (0.000) |    12.26 | Crisp, Drop, huncho, jared, Panic    |
|           10 |      627 | 2025-10-06 | SkinRave          | L   | 1.000      | -            | -                | -                | -         |    -2.59 | Crisp, Drop, huncho, jared, Panic    |
|            9 |      694 | 2025-10-05 | Wanted Goons      | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.172 (0.063)    | 0 (0.000) |    16.11 | Crisp, Drop, huncho, jared, Panic    |
|            8 |     1639 | 2025-09-10 | BOSS              | L   | 0.842      | -            | -                | -                | -         |    -6.29 | Crisp, Drop, huncho, jared, Panic    |
|            7 |     1744 | 2025-09-08 | FlyQuest RED      | L   | 0.829      | -            | -                | -                | -         |   -10.38 | Crisp, Drop, huncho, jared, Panic    |
|            6 |     1811 | 2025-09-06 | Ninjas in Pyjamas | L   | 0.815      | -            | -                | -                | -         |    -0.32 | Crisp, Drop, huncho, jared, Panic    |
|            5 |     1821 | 2025-09-06 | Mythic            | W   | 0.814      | 0.333        | 0.000 (0.000)    | 0.147 (0.040)    | 1 (0.814) |    11.57 | Crisp, Drop, huncho, jared, Panic    |
|            4 |     2289 | 2025-08-15 | LAG               | L   | 0.669      | -            | -                | -                | -         |   -12.35 | Crisp, FxRE, HAMBOOGA, huncho, Panic |
|            3 |     2339 | 2025-08-14 | MIGHT             | W   | 0.663      | 0.363        | 0.000 (0.000)    | 0.069 (0.017)    | 0 (0.000) |     8.41 | Crisp, FxRE, HAMBOOGA, huncho, Panic |
|            2 |     2386 | 2025-08-13 | Akimbo            | W   | 0.656      | 0.363        | 0.004 (0.001)    | 0.095 (0.023)    | 0 (0.000) |    13.51 | Crisp, FxRE, HAMBOOGA, huncho, Panic |
|            1 |     2440 | 2025-08-12 | Marsborne         | L   | 0.649      | -            | -                | -                | -         |    -1.94 | Crisp, FxRE, HAMBOOGA, huncho, Panic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
