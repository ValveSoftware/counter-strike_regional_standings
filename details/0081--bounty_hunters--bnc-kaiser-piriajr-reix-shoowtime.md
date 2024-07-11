### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: bnc, KAISER, piriajr, reix, SHOOWTiME<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [81](../standings_global.md)<br />
Regional Rank: [21]( ../standings_americas.md)<br />
Final Rank Value:  971.9<br />
<br />
Final Rank Value (971.9) = Starting Rank Value (901.1) + Head To Head Adjustments (70.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.193[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 901.1
- 400 + ( ( 0.238 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 901.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |       26 | 2024-07-10 | Solid             | W   | 1.000      | 0.371        | 0.048 (0.018)    | 0.585 (0.217)    | 0 (0.000) |    10.50 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           25 |       33 | 2024-07-09 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -5.76 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           24 |       62 | 2024-07-08 | BESTIA            | W   | 1.000      | 0.371        | 0.050 (0.019)    | 0.657 (0.243)    | 0 (0.000) |    20.04 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           23 |       85 | 2024-07-03 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -11.16 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           22 |       86 | 2024-07-02 | Vikings KR        | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.432 (0.144)    | 0 (0.000) |    10.01 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           21 |       88 | 2024-07-01 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -11.68 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           20 |      100 | 2024-06-29 | Patins da Ferrari | W   | 1.000      | 0.333        | 0.010 (0.003)    | -                | 0 (0.000) |    11.02 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           19 |      105 | 2024-06-28 | Sharks            | W   | 1.000      | 0.278        | 0.046 (0.013)    | 0.520 (0.144)    | 0 (0.000) |    20.61 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           18 |      110 | 2024-06-27 | W7M               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.33 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           17 |      116 | 2024-06-26 | Vikings KR        | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.432 (0.144)    | 0 (0.000) |    10.03 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           16 |      312 | 2024-06-11 | KRÜ               | L   | 1.000      | -            | -                | -                | -         |   -18.71 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           15 |      327 | 2024-06-10 | BESTIA            | L   | 0.994      | -            | -                | -                | -         |    -9.95 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           14 |      362 | 2024-06-09 | inSanitY          | W   | 0.988      | 0.371        | 0.066 (0.024)    | 0.433 (0.159)    | 0 (0.000) |    18.79 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           13 |      370 | 2024-06-09 | inSanitY          | L   | 0.987      | -            | -                | -                | -         |   -12.07 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           12 |      429 | 2024-06-08 | W7M               | W   | 0.981      | 0.450        | -                | 0.404 (0.179)    | 0 (0.000) |     9.34 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           11 |      478 | 2024-06-07 | MIBR              | W   | 0.975      | 0.371        | 0.270 (0.098)    | 0.648 (0.234)    | 0 (0.000) |    29.96 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           10 |      501 | 2024-06-07 | Fluxo             | L   | 0.973      | -            | -                | -                | -         |    -6.70 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            9 |      534 | 2024-06-06 | Case              | W   | 0.969      | 0.371        | 0.033 (0.012)    | 0.582 (0.209)    | -         |    14.22 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            8 |      572 | 2024-06-06 | Case              | W   | 0.966      | 0.450        | 0.033 (0.015)    | 0.582 (0.253)    | -         |    15.45 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            7 |      718 | 2024-06-02 | Hawks             | W   | 0.940      | -            | -                | -                | -         |     4.43 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            6 |      773 | 2024-05-31 | Intense           | L   | 0.929      | -            | -                | -                | -         |   -24.56 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            5 |      838 | 2024-05-29 | FURIA Academy     | W   | 0.914      | -            | -                | -                | -         |     3.44 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            4 |      874 | 2024-05-27 | inSanitY          | L   | 0.901      | -            | -                | -                | -         |   -11.45 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            3 |     1990 | 2024-04-16 | MIBR              | L   | 0.628      | -            | -                | -                | -         |    -0.41 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            2 |     2211 | 2024-04-08 | RED Canids        | L   | 0.573      | -            | -                | -                | -         |    -3.48 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            1 |     2254 | 2024-04-06 | MIBR              | L   | 0.562      | -            | -                | -                | -         |    -0.46 | bnc, KAISER, reix, SHOOWTiME, Tomate  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,492.77)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-03 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-10 |      0.995 | $1,500.00      | $1,492.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
