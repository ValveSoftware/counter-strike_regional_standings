### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [196](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [56]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  615.4<br />
<br />
Final Rank Value (615.4) = Starting Rank Value (652.1) + Head To Head Adjustments (-36.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.1
- 400 + ( ( 0.129 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 652.1


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
|           18 |     1422 | 2024-10-13 | FLUFFY AIMERS    | L   | 0.687      | -            | -                | -                | -         |    -3.48 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |     1437 | 2024-10-12 | Fisher College   | L   | 0.681      | -            | -                | -                | -         |    -4.41 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |     2038 | 2024-09-24 | Lore             | L   | 0.562      | -            | -                | -                | -         |   -11.79 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |     2080 | 2024-09-23 | Revenge Nation   | L   | 0.556      | -            | -                | -                | -         |    -7.63 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     2167 | 2024-09-20 | DETONATE         | W   | 0.536      | 0.371        | 0.000 (0.000)    | 0.050 (0.010)    | 0 (0.000) |     5.29 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     2191 | 2024-09-19 | undefined        | L   | 0.529      | -            | -                | -                | -         |    -6.58 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     2294 | 2024-09-16 | Mythic           | L   | 0.509      | -            | -                | -                | -         |    -9.95 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     2447 | 2024-09-11 | Akimbo           | L   | 0.474      | -            | -                | -                | -         |    -6.30 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     2504 | 2024-09-09 | Final Form       | W   | 0.462      | 0.372        | 0.003 (0.000)    | 0.061 (0.011)    | 0 (0.000) |     6.70 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     2544 | 2024-09-07 | Nouns            | L   | 0.447      | -            | -                | -                | -         |    -0.98 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     3248 | 2024-08-19 | Party Astronauts | L   | 0.321      | -            | -                | -                | -         |    -1.85 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     3345 | 2024-08-15 | NRG              | L   | 0.294      | -            | -                | -                | -         |    -0.45 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     3404 | 2024-08-13 | M80              | L   | 0.281      | -            | -                | -                | -         |    -0.38 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     3485 | 2024-08-11 | Canada           | W   | 0.268      | 0.371        | 0.002 (0.000)    | 0.078 (0.008)    | 0 (0.000) |     4.42 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     3532 | 2024-08-09 | LAG              | W   | 0.255      | 0.371        | 0.004 (0.000)    | 0.119 (0.011)    | 0 (0.000) |     4.19 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     3677 | 2024-08-05 | Aether           | W   | 0.229      | 0.371        | 0.000 (0.000)    | 0.072 (0.006)    | 0 (0.000) |     2.09 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     3969 | 2024-07-28 | Vibe             | L   | 0.176      | -            | -                | -                | -         |    -3.93 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     4091 | 2024-07-24 | Take Flyte       | L   | 0.149      | -            | -                | -                | -         |    -1.61 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,894.73)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.688 | $150.00        | $103.23         |
| 2024-09-21 |      0.543 | $3,300.00      | $1,791.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
