### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: bnc, KAISER, piriajr, reix, SHOOWTiME<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [73](../standings_global.md)<br />
Regional Rank: [19]( ../standings_americas.md)<br />
Final Rank Value:  1004.0<br />
<br />
Final Rank Value (1004.0) = Starting Rank Value (923.5) + Head To Head Adjustments (80.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.375[<sup>2</sup>](#table1)
- Opponent Network: 0.203[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 923.5
- 400 + ( ( 0.244 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 923.5


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
|           29 |      102 | 2024-07-15 | FURIA Academy     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.11 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           28 |      146 | 2024-07-12 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -9.95 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           27 |      161 | 2024-07-11 | Sharks            | W   | 1.000      | 0.371        | 0.046 (0.017)    | 0.501 (0.186)    | 0 (0.000) |    17.17 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           26 |      190 | 2024-07-10 | Solid             | W   | 1.000      | 0.371        | 0.047 (0.017)    | 0.622 (0.230)    | 0 (0.000) |    10.74 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           25 |      197 | 2024-07-09 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -6.03 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           24 |      226 | 2024-07-08 | BESTIA            | W   | 1.000      | 0.371        | 0.050 (0.019)    | 0.645 (0.239)    | 0 (0.000) |    19.82 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           23 |      249 | 2024-07-03 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -11.16 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           22 |      250 | 2024-07-02 | Vikings KR        | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.430 (0.143)    | 0 (0.000) |    10.13 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           21 |      252 | 2024-07-01 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -11.68 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           20 |      264 | 2024-06-29 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.65 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           19 |      269 | 2024-06-28 | Sharks            | W   | 1.000      | 0.278        | 0.046 (0.013)    | -                | 0 (0.000) |    20.23 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           18 |      274 | 2024-06-27 | W7M               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.65 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           17 |      280 | 2024-06-26 | Vikings KR        | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.430 (0.143)    | 0 (0.000) |    10.16 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           16 |      476 | 2024-06-11 | KRÜ               | L   | 0.960      | -            | -                | -                | -         |   -17.25 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           15 |      491 | 2024-06-10 | BESTIA            | L   | 0.955      | -            | -                | -                | -         |    -9.70 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           14 |      526 | 2024-06-09 | inSanitY          | W   | 0.948      | 0.371        | 0.069 (0.024)    | 0.470 (0.165)    | 0 (0.000) |    18.09 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           13 |      534 | 2024-06-09 | inSanitY          | L   | 0.947      | -            | -                | -                | -         |   -11.58 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           12 |      593 | 2024-06-08 | W7M               | W   | 0.941      | 0.450        | -                | 0.418 (0.177)    | -         |     9.35 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           11 |      642 | 2024-06-07 | MIBR              | W   | 0.936      | 0.371        | 0.269 (0.093)    | 0.614 (0.213)    | -         |    28.63 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           10 |      665 | 2024-06-07 | Fluxo             | L   | 0.934      | -            | -                | -                | -         |    -6.66 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            9 |      698 | 2024-06-06 | Case              | W   | 0.929      | 0.371        | 0.034 (0.012)    | 0.697 (0.240)    | -         |    14.25 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            8 |      736 | 2024-06-06 | Case              | W   | 0.927      | 0.450        | 0.034 (0.014)    | 0.697 (0.291)    | -         |    15.43 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            7 |      882 | 2024-06-02 | Hawks             | W   | 0.901      | -            | -                | -                | -         |     3.87 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            6 |      937 | 2024-05-31 | Intense           | L   | 0.889      | -            | -                | -                | -         |   -23.59 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            5 |     1002 | 2024-05-29 | FURIA Academy     | W   | 0.874      | -            | -                | -                | -         |     3.07 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            4 |     1038 | 2024-05-27 | inSanitY          | L   | 0.862      | -            | -                | -                | -         |   -10.94 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            3 |     2154 | 2024-04-16 | MIBR              | L   | 0.589      | -            | -                | -                | -         |    -0.46 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            2 |     2375 | 2024-04-08 | RED Canids        | L   | 0.534      | -            | -                | -                | -         |    -3.31 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            1 |     2418 | 2024-04-06 | MIBR              | L   | 0.522      | -            | -                | -                | -         |    -0.51 | bnc, KAISER, reix, SHOOWTiME, Tomate  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,433.35)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-07-03 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-10 |      0.956 | $1,500.00      | $1,433.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
