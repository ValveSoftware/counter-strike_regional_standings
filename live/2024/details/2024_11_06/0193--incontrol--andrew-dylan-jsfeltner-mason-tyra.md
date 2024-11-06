### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [193](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_06.md)<br />
Regional Rank: [56]( ../../standings_americas_2024_11_06.md)<br />
<br />
Final Rank Value:  612.0<br />
<br />
Final Rank Value (612.0) = Starting Rank Value (667.6) + Head To Head Adjustments (-55.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.6
- 400 + ( ( 0.136 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 667.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      461 | 2024-10-13 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -6.31 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |      476 | 2024-10-12 | Fisher Tsunami   | L   | 1.000      | -            | -                | -                | -         |    -6.39 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |     1077 | 2024-09-24 | Lore             | L   | 0.917      | -            | -                | -                | -         |   -18.64 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |     1119 | 2024-09-23 | Revenge Nation   | L   | 0.910      | -            | -                | -                | -         |   -12.14 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     1206 | 2024-09-20 | DETONATE         | W   | 0.890      | 0.371        | 0.000 (0.000)    | 0.103 (0.034)    | 0 (0.000) |     8.99 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     1230 | 2024-09-19 | undefined        | L   | 0.883      | -            | -                | -                | -         |    -9.22 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     1333 | 2024-09-16 | Mythic           | L   | 0.863      | -            | -                | -                | -         |   -12.09 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     1486 | 2024-09-11 | Akimbo           | L   | 0.828      | -            | -                | -                | -         |    -9.58 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     1543 | 2024-09-09 | Final Form       | W   | 0.816      | 0.372        | 0.003 (0.001)    | 0.125 (0.038)    | 0 (0.000) |    12.16 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     1583 | 2024-09-07 | Nouns            | L   | 0.802      | -            | -                | -                | -         |    -2.64 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     2287 | 2024-08-19 | Party Astronauts | L   | 0.675      | -            | -                | -                | -         |    -3.95 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     2384 | 2024-08-15 | NRG              | L   | 0.649      | -            | -                | -                | -         |    -2.95 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     2443 | 2024-08-13 | M80              | L   | 0.635      | -            | -                | -                | -         |    -0.69 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     2524 | 2024-08-11 | Homyno           | W   | 0.623      | 0.371        | 0.003 (0.001)    | 0.094 (0.022)    | 0 (0.000) |     8.59 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     2571 | 2024-08-09 | LAG              | W   | 0.609      | 0.371        | 0.003 (0.001)    | 0.248 (0.056)    | 0 (0.000) |    11.61 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     2716 | 2024-08-05 | Aether           | W   | 0.583      | 0.371        | 0.000 (0.000)    | 0.100 (0.022)    | 0 (0.000) |     5.16 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     3008 | 2024-07-28 | Vibe             | L   | 0.530      | -            | -                | -                | -         |   -11.96 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     3130 | 2024-07-24 | Take Flyte       | L   | 0.503      | -            | -                | -                | -         |    -5.55 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,110.46)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $150.00        | $150.00         |
| 2024-09-21 |      0.897 | $3,300.00      | $2,960.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
