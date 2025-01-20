### Roster Details<br />
Team Name: InControl<br />
Roster: Beast, DYLAN, jsfeltner, milo, TyRa<br />
Global Rank: [191](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [56]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  620.9<br />
<br />
Final Rank Value (620.9) = Starting Rank Value (652.0) + Head To Head Adjustments (-31.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.0
- 400 + ( ( 0.127 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 652.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |       24 | 2025-01-14 | Akimbo             | L   | 1.000      | -            | -                | -                | -         |   -10.76 | Beast, DYLAN, jsfeltner, milo, TyRa   |
|           17 |     1505 | 2024-10-13 | FLUFFY AIMERS      | L   | 0.566      | -            | -                | -                | -         |    -2.90 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |     1520 | 2024-10-12 | Fisher College     | L   | 0.560      | -            | -                | -                | -         |    -3.84 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           15 |     2163 | 2024-09-23 | Revenge Nation     | L   | 0.435      | -            | -                | -                | -         |    -6.03 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     2250 | 2024-09-20 | DETONATE           | W   | 0.415      | 0.371        | 0.000 (0.000)    | 0.033 (0.005)    | 0 (0.000) |     3.90 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     2274 | 2024-09-19 | undefined          | L   | 0.408      | -            | -                | -                | -         |    -5.37 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     2377 | 2024-09-16 | Mythic             | L   | 0.387      | -            | -                | -                | -         |    -7.82 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     2530 | 2024-09-11 | Akimbo             | L   | 0.353      | -            | -                | -                | -         |    -4.62 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     2587 | 2024-09-09 | Tsunami            | W   | 0.341      | 0.372        | 0.003 (0.000)    | 0.046 (0.006)    | 0 (0.000) |     4.91 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     2627 | 2024-09-07 | Nouns              | L   | 0.326      | -            | -                | -                | -         |    -0.74 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     3331 | 2024-08-19 | Party Astronauts   | L   | 0.200      | -            | -                | -                | -         |    -1.22 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     3428 | 2024-08-15 | NRG                | L   | 0.173      | -            | -                | -                | -         |    -0.23 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     3487 | 2024-08-13 | M80                | L   | 0.160      | -            | -                | -                | -         |    -0.26 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     3568 | 2024-08-11 | Canada             | W   | 0.147      | 0.371        | 0.002 (0.000)    | 0.065 (0.004)    | 0 (0.000) |     2.39 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     3615 | 2024-08-09 | LAG                | W   | 0.133      | 0.371        | 0.004 (0.000)    | 0.085 (0.004)    | 0 (0.000) |     2.04 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     3760 | 2024-08-05 | Aether             | W   | 0.107      | 0.371        | 0.000 (0.000)    | 0.063 (0.003)    | 0 (0.000) |     0.98 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     4052 | 2024-07-28 | Vibe               | L   | 0.054      | -            | -                | -                | -         |    -1.23 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     4174 | 2024-07-24 | Bad News Capybaras | L   | 0.028      | -            | -                | -                | -         |    -0.31 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,476.62)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.567 | $150.00        | $85.05          |
| 2024-09-21 |      0.422 | $3,300.00      | $1,391.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
