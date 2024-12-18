### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [199](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_18.md)<br />
Regional Rank: [58]( ../../standings_americas_2024_12_18.md)<br />
<br />
Final Rank Value:  609.7<br />
<br />
Final Rank Value (609.7) = Starting Rank Value (649.9) + Head To Head Adjustments (-40.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.312[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 649.9
- 400 + ( ( 0.130 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 649.9


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
|           18 |     1339 | 2024-10-13 | FLUFFY AIMERS    | L   | 0.761      | -            | -                | -                | -         |    -3.84 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |     1354 | 2024-10-12 | Fisher College   | L   | 0.755      | -            | -                | -                | -         |    -4.79 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |     1955 | 2024-09-24 | Lore             | L   | 0.636      | -            | -                | -                | -         |   -13.20 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |     1997 | 2024-09-23 | Revenge Nation   | L   | 0.630      | -            | -                | -                | -         |    -8.55 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     2084 | 2024-09-20 | DETONATE         | W   | 0.609      | 0.371        | 0.000 (0.000)    | 0.060 (0.014)    | 0 (0.000) |     6.16 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     2108 | 2024-09-19 | undefined        | L   | 0.603      | -            | -                | -                | -         |    -7.25 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     2211 | 2024-09-16 | Mythic           | L   | 0.582      | -            | -                | -                | -         |   -11.11 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     2364 | 2024-09-11 | Akimbo           | L   | 0.548      | -            | -                | -                | -         |    -7.21 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     2421 | 2024-09-09 | Final Form       | W   | 0.536      | 0.372        | 0.003 (0.001)    | 0.071 (0.014)    | 0 (0.000) |     7.79 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     2461 | 2024-09-07 | Nouns            | L   | 0.521      | -            | -                | -                | -         |    -1.12 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     3165 | 2024-08-19 | Party Astronauts | L   | 0.395      | -            | -                | -                | -         |    -2.20 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     3262 | 2024-08-15 | NRG              | L   | 0.368      | -            | -                | -                | -         |    -0.58 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     3321 | 2024-08-13 | M80              | L   | 0.355      | -            | -                | -                | -         |    -0.41 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     3402 | 2024-08-11 | Canada           | W   | 0.342      | 0.371        | 0.002 (0.000)    | 0.087 (0.011)    | 0 (0.000) |     5.67 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     3449 | 2024-08-09 | LAG              | W   | 0.328      | 0.371        | 0.003 (0.000)    | 0.141 (0.017)    | 0 (0.000) |     5.52 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     3594 | 2024-08-05 | Aether           | W   | 0.302      | 0.371        | 0.000 (0.000)    | 0.078 (0.009)    | 0 (0.000) |     2.77 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     3886 | 2024-07-28 | Vibe             | L   | 0.249      | -            | -                | -                | -         |    -5.54 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     4008 | 2024-07-24 | Take Flyte       | L   | 0.223      | -            | -                | -                | -         |    -2.38 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,148.73)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.762 | $150.00        | $114.28         |
| 2024-09-21 |      0.617 | $3,300.00      | $2,034.45       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
