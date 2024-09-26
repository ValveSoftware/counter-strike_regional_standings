### Roster Details<br />
Team Name: InControl<br />
Roster: AJ2k, FIEND, jsfeltner, mason, TyRa<br />
Global Rank: [179](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_26.md)<br />
Regional Rank: [51]( ../../standings_americas_2024_09_26.md)<br />
<br />
Final Rank Value:  621.0<br />
<br />
Final Rank Value (621.0) = Starting Rank Value (676.9) + Head To Head Adjustments (-55.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.9
- 400 + ( ( 0.146 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 676.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       78 | 2024-09-24 | Lore             | L   | 1.000      | -            | -                | -                | -         |   -19.92 | AJ2k, FIEND, jsfeltner, mason, TyRa  |
|           15 |      120 | 2024-09-23 | Revenge Nation   | L   | 1.000      | -            | -                | -                | -         |   -18.28 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           14 |      207 | 2024-09-20 | DETONATE         | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.154 (0.057)    | 0 (0.000) |    10.55 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           13 |      231 | 2024-09-19 | undefined        | L   | 1.000      | -            | -                | -                | -         |    -9.14 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           12 |      334 | 2024-09-16 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -13.90 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           11 |      487 | 2024-09-11 | Akimbo           | L   | 1.000      | -            | -                | -                | -         |   -11.04 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           10 |      544 | 2024-09-09 | Final Form       | W   | 1.000      | 0.372        | 0.004 (0.001)    | 0.191 (0.071)    | 0 (0.000) |    15.30 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            9 |      584 | 2024-09-07 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -3.36 | Beast, jsfeltner, mason, Pugg, TyRa  |
|            8 |     1288 | 2024-08-19 | Party Astronauts | L   | 0.948      | -            | -                | -                | -         |    -5.36 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            7 |     1385 | 2024-08-15 | NRG              | L   | 0.922      | -            | -                | -                | -         |    -4.04 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            6 |     1444 | 2024-08-13 | M80              | L   | 0.908      | -            | -                | -                | -         |    -0.83 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            5 |     1525 | 2024-08-11 | Homyno           | W   | 0.896      | 0.371        | 0.006 (0.002)    | 0.155 (0.052)    | 0 (0.000) |    11.79 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            4 |     1572 | 2024-08-09 | LAG              | W   | 0.882      | 0.371        | 0.000 (0.000)    | 0.262 (0.086)    | 0 (0.000) |    12.48 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            3 |     1717 | 2024-08-05 | Aether           | W   | 0.856      | 0.371        | 0.000 (0.000)    | 0.114 (0.036)    | 0 (0.000) |     7.44 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            2 |     2009 | 2024-07-28 | Vibe             | L   | 0.803      | -            | -                | -                | -         |   -18.21 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            1 |     2131 | 2024-07-24 | Take Flyte       | L   | 0.776      | -            | -                | -                | -         |    -9.35 | DYLAN, FIEND, jsfeltner, mason, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,300.00)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
