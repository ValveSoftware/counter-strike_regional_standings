### Roster Details<br />
Team Name: InControl<br />
Roster: AJ2k, FIEND, jsfeltner, mason, TyRa<br />
Global Rank: [187](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [53]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  622.0<br />
<br />
Final Rank Value (622.0) = Starting Rank Value (678.7) + Head To Head Adjustments (-56.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.7
- 400 + ( ( 0.146 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 678.7


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
|           16 |      311 | 2024-09-24 | Lore             | L   | 1.000      | -            | -                | -                | -         |   -19.95 | AJ2k, FIEND, jsfeltner, mason, TyRa  |
|           15 |      353 | 2024-09-23 | Revenge Nation   | L   | 1.000      | -            | -                | -                | -         |   -18.59 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           14 |      440 | 2024-09-20 | DETONATE         | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.133 (0.049)    | 0 (0.000) |    10.16 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           13 |      464 | 2024-09-19 | undefined        | L   | 1.000      | -            | -                | -                | -         |    -9.63 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           12 |      567 | 2024-09-16 | Mythic           | L   | 1.000      | -            | -                | -                | -         |   -13.97 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           11 |      720 | 2024-09-11 | Akimbo           | L   | 1.000      | -            | -                | -                | -         |   -10.75 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           10 |      777 | 2024-09-09 | Final Form       | W   | 1.000      | 0.372        | 0.004 (0.001)    | 0.166 (0.062)    | 0 (0.000) |    15.05 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            9 |      817 | 2024-09-07 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -3.32 | Beast, jsfeltner, mason, Pugg, TyRa  |
|            8 |     1521 | 2024-08-19 | Party Astronauts | L   | 0.907      | -            | -                | -                | -         |    -5.09 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            7 |     1618 | 2024-08-15 | NRG              | L   | 0.881      | -            | -                | -                | -         |    -4.09 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            6 |     1677 | 2024-08-13 | M80              | L   | 0.868      | -            | -                | -                | -         |    -0.83 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            5 |     1758 | 2024-08-11 | Homyno           | W   | 0.855      | 0.371        | 0.005 (0.002)    | 0.133 (0.042)    | 0 (0.000) |    11.21 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            4 |     1805 | 2024-08-09 | LAG              | W   | 0.841      | 0.371        | 0.000 (0.000)    | 0.261 (0.081)    | 0 (0.000) |    12.20 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            3 |     1950 | 2024-08-05 | Aether           | W   | 0.815      | 0.371        | 0.000 (0.000)    | 0.103 (0.031)    | 0 (0.000) |     7.05 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            2 |     2242 | 2024-07-28 | Vibe             | L   | 0.762      | -            | -                | -                | -         |   -17.33 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            1 |     2364 | 2024-07-24 | Take Flyte       | L   | 0.735      | -            | -                | -                | -         |    -8.76 | DYLAN, FIEND, jsfeltner, mason, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,300.00)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
