### Roster Details<br />
Team Name: Monte Gen<br />
Roster: fnl, Gizmy, leen, ryu, shield<br />
Global Rank: [93](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [66]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  874.5<br />
<br />
Final Rank Value (874.5) = Starting Rank Value (823.5) + Head To Head Adjustments (51.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 823.5
- 400 + ( ( 0.214 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 823.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       19 | 2024-08-28 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -13.36 | fnl, Gizmy, leen, ryu, shield  |
|           13 |       58 | 2024-08-27 | TSM             | W   | 1.000      | 0.435        | 0.064 (0.028)    | 0.844 (0.367)    | 0 (0.000) |    24.07 | fnl, Gizmy, leen, ryu, shield  |
|           12 |      180 | 2024-08-25 | PARIVISION      | W   | 1.000      | 0.435        | 0.050 (0.022)    | 0.703 (0.306)    | 0 (0.000) |    26.45 | fnl, Gizmy, leen, ryu, shield  |
|           11 |      368 | 2024-08-20 | Revenant        | W   | 1.000      | 0.435        | 0.047 (0.020)    | 0.576 (0.251)    | 0 (0.000) |    20.65 | fnl, Gizmy, leen, ryu, shield  |
|           10 |      439 | 2024-08-17 | Insilio         | W   | 1.000      | 0.435        | 0.027 (0.012)    | 0.555 (0.241)    | 0 (0.000) |    19.83 | fnl, Gizmy, leen, ryu, shield  |
|            9 |      472 | 2024-08-16 | Permitta        | L   | 1.000      | -            | -                | -                | -         |   -11.35 | AiyvaN, fnl, leen, ryu, shield |
|            8 |      568 | 2024-08-13 | ALTERNATE aTTaX | W   | 1.000      | 0.435        | 0.035 (0.015)    | 0.707 (0.307)    | 0 (0.000) |    17.77 | fnl, Gizmy, leen, ryu, shield  |
|            7 |      615 | 2024-08-12 | Preasy          | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.173 (0.025)    | 0 (0.000) |    12.39 | fnl, Gizmy, leen, ryu, shield  |
|            6 |      687 | 2024-08-09 | HAVU            | L   | 1.000      | -            | -                | -                | -         |   -24.53 | fnl, Gizmy, leen, ryu, shield  |
|            5 |      763 | 2024-08-07 | DMS             | L   | 1.000      | -            | -                | -                | -         |   -12.19 | fnl, Gizmy, leen, ryu, shield  |
|            4 |      796 | 2024-08-06 | CYBERSHOKE      | L   | 1.000      | -            | -                | -                | -         |   -10.20 | fnl, Gizmy, leen, ryu, shield  |
|            3 |      853 | 2024-08-04 | Revenant        | W   | 1.000      | 0.143        | 0.047 (0.007)    | 0.576 (0.082)    | 0 (0.000) |    19.29 | fnl, Gizmy, leen, ryu, shield  |
|            2 |     1070 | 2024-07-30 | Sampi           | L   | 1.000      | -            | -                | -                | -         |   -11.53 | fnl, Gizmy, leen, ryu, shield  |
|            1 |     1094 | 2024-07-29 | MOUZ NXT        | L   | 0.999      | -            | -                | -                | -         |    -6.28 | fnl, Gizmy, leen, ryu, shield  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,000.00)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
