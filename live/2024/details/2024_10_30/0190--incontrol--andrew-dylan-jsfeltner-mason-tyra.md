### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [190](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_30.md)<br />
Regional Rank: [56]( ../../standings_americas_2024_10_30.md)<br />
<br />
Final Rank Value:  641.4<br />
<br />
Final Rank Value (641.4) = Starting Rank Value (696.7) + Head To Head Adjustments (-55.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 696.7
- 400 + ( ( 0.150 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 696.7


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
|           18 |      320 | 2024-10-13 | FLUFFY AIMERS    | L   | 1.000      | -            | -                | -                | -         |    -5.74 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |      335 | 2024-10-12 | Fisher Tsunami   | L   | 1.000      | -            | -                | -                | -         |    -6.11 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |      936 | 2024-09-24 | Lore             | L   | 0.963      | -            | -                | -                | -         |   -20.18 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |      978 | 2024-09-23 | Revenge Nation   | L   | 0.956      | -            | -                | -                | -         |   -12.57 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     1065 | 2024-09-20 | DETONATE         | W   | 0.936      | 0.371        | 0.000 (0.000)    | 0.104 (0.036)    | 0 (0.000) |     8.84 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     1089 | 2024-09-19 | undefined        | L   | 0.930      | -            | -                | -                | -         |    -9.39 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     1192 | 2024-09-16 | Mythic           | L   | 0.909      | -            | -                | -                | -         |   -12.24 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     1345 | 2024-09-11 | Akimbo           | L   | 0.875      | -            | -                | -                | -         |    -9.63 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     1402 | 2024-09-09 | Final Form       | W   | 0.863      | 0.372        | 0.005 (0.002)    | 0.128 (0.041)    | 0 (0.000) |    12.72 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     1442 | 2024-09-07 | Nouns            | L   | 0.848      | -            | -                | -                | -         |    -2.26 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     2146 | 2024-08-19 | Party Astronauts | L   | 0.721      | -            | -                | -                | -         |    -3.56 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     2243 | 2024-08-15 | NRG              | L   | 0.695      | -            | -                | -                | -         |    -2.59 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     2302 | 2024-08-13 | M80              | L   | 0.682      | -            | -                | -                | -         |    -0.45 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     2383 | 2024-08-11 | Homyno           | W   | 0.669      | 0.371        | 0.006 (0.002)    | 0.098 (0.024)    | 0 (0.000) |     9.07 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     2430 | 2024-08-09 | LAG              | W   | 0.655      | 0.371        | 0.006 (0.002)    | 0.246 (0.060)    | 0 (0.000) |    12.85 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     2575 | 2024-08-05 | Aether           | W   | 0.629      | 0.371        | 0.000 (0.000)    | 0.099 (0.023)    | 0 (0.000) |     5.14 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     2867 | 2024-07-28 | Vibe             | L   | 0.576      | -            | -                | -                | -         |   -13.38 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     2989 | 2024-07-24 | Take Flyte       | L   | 0.549      | -            | -                | -                | -         |    -5.82 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,262.91)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $150.00        | $150.00         |
| 2024-09-21 |      0.943 | $3,300.00      | $3,112.91       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
