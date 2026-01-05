### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, Drop, jared, Louie, Panic<br />
Global Rank: [244](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [64]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  567.4<br />
<br />
Final Rank Value (567.4) = Starting Rank Value (592.1) + Head To Head Adjustments (-24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.128[<sup>2</sup>](#table1)

The average of these factors is 0.097<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 592.1
- 400 + ( ( 0.097 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 592.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      238 | 2025-12-12 | Straight2Killin   | L   | 1.000      | -            | -                | -                | -         |   -16.58 | Crisp, Drop, jared, Louie, Panic  |
|           25 |      242 | 2025-12-12 | 33                | L   | 1.000      | -            | -                | -                | -         |   -17.87 | Crisp, Drop, jared, Louie, Panic  |
|           24 |      277 | 2025-12-09 | Phoenix           | L   | 1.000      | -            | -                | -                | -         |   -11.94 | Crisp, Drop, huncho, Louie, Panic |
|           23 |      294 | 2025-12-08 | BOSS              | L   | 1.000      | -            | -                | -                | -         |    -7.05 | Crisp, Drop, huncho, Louie, Panic |
|           22 |      387 | 2025-12-04 | regain            | W   | 0.990      | 0.333        | 0.005 (0.002)    | 0.404 (0.133)    | 0 (0.000) |    20.29 | Crisp, Drop, huncho, Louie, Panic |
|           21 |      429 | 2025-12-02 | Aether            | W   | 0.976      | 0.333        | 0.001 (0.000)    | 0.102 (0.033)    | 0 (0.000) |    18.91 | Crisp, Drop, huncho, Louie, Panic |
|           20 |     1048 | 2025-11-08 | F5                | L   | 0.816      | -            | -                | -                | -         |   -13.77 | Crisp, Drop, huncho, jared, Panic |
|           19 |     1053 | 2025-11-08 | barry pickers     | W   | 0.815      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.815) |     6.45 | Crisp, Drop, huncho, jared, Panic |
|           18 |     1060 | 2025-11-08 | F5                | L   | 0.815      | -            | -                | -                | -         |   -14.50 | Crisp, Drop, huncho, jared, Panic |
|           17 |     1341 | 2025-11-01 | SportsBetExpert   | L   | 0.769      | -            | -                | -                | -         |    -9.21 | Crisp, Drop, huncho, jared, Panic |
|           16 |     1520 | 2025-10-26 | Money Crew        | W   | 0.729      | 0.333        | 0.000 (0.000)    | 0.067 (0.016)    | 0 (0.000) |    11.73 | Crisp, Drop, huncho, jared, Panic |
|           15 |     1579 | 2025-10-25 | TSG               | L   | 0.722      | -            | -                | -                | -         |   -12.48 | Crisp, Drop, huncho, jared, Panic |
|           14 |     1629 | 2025-10-24 | SportsBetExpert   | L   | 0.716      | -            | -                | -                | -         |    -9.15 | Crisp, Drop, huncho, jared, Panic |
|           13 |     1694 | 2025-10-23 | Mythic            | L   | 0.709      | -            | -                | -                | -         |    -9.37 | Crisp, Drop, huncho, jared, Panic |
|           12 |     1739 | 2025-10-22 | Outfit 49         | W   | 0.703      | 0.333        | 0.000 (0.000)    | 0.181 (0.042)    | 0 (0.000) |    10.37 | Crisp, Drop, huncho, jared, Panic |
|           11 |     1775 | 2025-10-20 | Marsborne         | L   | 0.690      | -            | -                | -                | -         |    -1.15 | Crisp, Drop, huncho, jared, Panic |
|           10 |     1885 | 2025-10-15 | InControl         | W   | 0.657      | 0.333        | 0.001 (0.000)    | 0.200 (0.044)    | 0 (0.000) |    12.03 | Crisp, Drop, huncho, jared, Panic |
|            9 |     2051 | 2025-10-09 | Phoenix           | L   | 0.616      | -            | -                | -                | -         |    -6.67 | Crisp, Drop, huncho, jared, Panic |
|            8 |     2101 | 2025-10-08 | InControl         | W   | 0.609      | 0.363        | 0.001 (0.000)    | 0.200 (0.044)    | 0 (0.000) |    11.61 | Crisp, Drop, huncho, jared, Panic |
|            7 |     2158 | 2025-10-07 | anything else     | W   | 0.602      | 0.363        | 0.000 (0.000)    | 0.045 (0.010)    | 0 (0.000) |     6.93 | Crisp, Drop, huncho, jared, Panic |
|            6 |     2208 | 2025-10-06 | SkinRave          | L   | 0.596      | -            | -                | -                | -         |    -2.28 | Crisp, Drop, huncho, jared, Panic |
|            5 |     2275 | 2025-10-05 | Wanted Goons      | W   | 0.589      | 0.363        | 0.000 (0.000)    | 0.141 (0.030)    | 0 (0.000) |     8.04 | Crisp, Drop, huncho, jared, Panic |
|            4 |     3220 | 2025-09-10 | BOSS              | L   | 0.423      | -            | -                | -                | -         |    -3.53 | Crisp, Drop, huncho, jared, Panic |
|            3 |     3325 | 2025-09-08 | FlyQuest RED      | L   | 0.409      | -            | -                | -                | -         |    -3.19 | Crisp, Drop, huncho, jared, Panic |
|            2 |     3392 | 2025-09-06 | Ninjas in Pyjamas | L   | 0.395      | -            | -                | -                | -         |    -0.07 | Crisp, Drop, huncho, jared, Panic |
|            1 |     3402 | 2025-09-06 | Mythic            | W   | 0.394      | 0.333        | 0.002 (0.000)    | 0.208 (0.027)    | 1 (0.394) |     7.70 | Crisp, Drop, huncho, jared, Panic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
