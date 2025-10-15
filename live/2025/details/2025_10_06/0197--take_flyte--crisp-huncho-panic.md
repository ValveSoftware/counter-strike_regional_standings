### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, huncho, Panic<br />
Global Rank: [197](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_06.md)<br />
Regional Rank: [56]( ../../standings_americas_2025_10_06.md)<br />
<br />
Final Rank Value:  573.6<br />
<br />
Final Rank Value (573.6) = Starting Rank Value (561.8) + Head To Head Adjustments (11.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.103[<sup>2</sup>](#table1)

The average of these factors is 0.083<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 561.8
- 400 + ( ( 0.083 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 561.8


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
|            8 |      749 | 2025-09-10 | BOSS              | L   | 1.000      | -            | -                | -                | -         |    -7.04 | Crisp, Drop, huncho, jared, Panic    |
|            7 |      845 | 2025-09-08 | FlyQuest RED      | L   | 1.000      | -            | -                | -                | -         |   -13.49 | Crisp, Drop, huncho, jared, Panic    |
|            6 |      912 | 2025-09-06 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -0.21 | Crisp, Drop, huncho, jared, Panic    |
|            5 |      922 | 2025-09-06 | Mythic            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.076 (0.025)    | 1 (1.000) |    12.51 | Crisp, Drop, huncho, jared, Panic    |
|            4 |     1390 | 2025-08-15 | LAG               | L   | 0.856      | -            | -                | -                | -         |    -6.70 | Crisp, FxRE, HAMBOOGA, huncho, Panic |
|            3 |     1440 | 2025-08-14 | MIGHT             | W   | 0.850      | 0.363        | 0.000 (0.000)    | 0.109 (0.034)    | 0 (0.000) |    10.78 | Crisp, FxRE, HAMBOOGA, huncho, Panic |
|            2 |     1487 | 2025-08-13 | Akimbo            | W   | 0.843      | 0.363        | 0.009 (0.003)    | 0.119 (0.036)    | 0 (0.000) |    18.23 | Crisp, FxRE, HAMBOOGA, huncho, Panic |
|            1 |     1540 | 2025-08-12 | Marsborne         | L   | 0.836      | -            | -                | -                | -         |    -2.29 | Crisp, FxRE, HAMBOOGA, huncho, Panic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
