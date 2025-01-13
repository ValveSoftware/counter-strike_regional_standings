### Roster Details<br />
Team Name: InControl<br />
Roster: Andrew, DYLAN, jsfeltner, mason, TyRa<br />
Global Rank: [192](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [56]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  622.7<br />
<br />
Final Rank Value (622.7) = Starting Rank Value (653.7) + Head To Head Adjustments (-31.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 653.7
- 400 + ( ( 0.128 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 653.7


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
|           18 |     1478 | 2024-10-13 | FLUFFY AIMERS    | L   | 0.589      | -            | -                | -                | -         |    -2.88 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           17 |     1493 | 2024-10-12 | Fisher College   | L   | 0.582      | -            | -                | -                | -         |    -3.80 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|           16 |     2094 | 2024-09-24 | Lore             | L   | 0.463      | -            | -                | -                | -         |    -9.84 | AJ2k, FIEND, jsfeltner, mason, TyRa   |
|           15 |     2136 | 2024-09-23 | Revenge Nation   | L   | 0.457      | -            | -                | -                | -         |    -6.34 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           14 |     2223 | 2024-09-20 | DETONATE         | W   | 0.437      | 0.371        | 0.000 (0.000)    | 0.036 (0.006)    | 0 (0.000) |     4.14 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           13 |     2247 | 2024-09-19 | undefined        | L   | 0.430      | -            | -                | -                | -         |    -5.61 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           12 |     2350 | 2024-09-16 | Mythic           | L   | 0.410      | -            | -                | -                | -         |    -8.21 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           11 |     2503 | 2024-09-11 | Akimbo           | L   | 0.375      | -            | -                | -                | -         |    -5.04 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|           10 |     2560 | 2024-09-09 | Final Form       | W   | 0.363      | 0.372        | 0.003 (0.000)    | 0.048 (0.007)    | 0 (0.000) |     5.23 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            9 |     2600 | 2024-09-07 | Nouns            | L   | 0.349      | -            | -                | -                | -         |    -0.77 | Beast, jsfeltner, mason, Pugg, TyRa   |
|            8 |     3304 | 2024-08-19 | Party Astronauts | L   | 0.222      | -            | -                | -                | -         |    -1.34 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            7 |     3401 | 2024-08-15 | NRG              | L   | 0.196      | -            | -                | -                | -         |    -0.26 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            6 |     3460 | 2024-08-13 | M80              | L   | 0.182      | -            | -                | -                | -         |    -0.28 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            5 |     3541 | 2024-08-11 | Canada           | W   | 0.170      | 0.371        | 0.002 (0.000)    | 0.066 (0.004)    | 0 (0.000) |     2.77 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            4 |     3588 | 2024-08-09 | LAG              | W   | 0.156      | 0.371        | 0.004 (0.000)    | 0.089 (0.005)    | 0 (0.000) |     2.38 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            3 |     3733 | 2024-08-05 | Aether           | W   | 0.130      | 0.371        | 0.000 (0.000)    | 0.064 (0.003)    | 0 (0.000) |     1.18 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            2 |     4025 | 2024-07-28 | Vibe             | L   | 0.077      | -            | -                | -                | -         |    -1.74 | DYLAN, FIEND, jsfeltner, mason, TyRa  |
|            1 |     4147 | 2024-07-24 | Take Flyte       | L   | 0.050      | -            | -                | -                | -         |    -0.55 | DYLAN, FIEND, jsfeltner, mason, TyRa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,553.76)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.589 | $150.00        | $88.41          |
| 2024-09-21 |      0.444 | $3,300.00      | $1,465.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
