### Roster Details<br />
Team Name: Bounty Hunters<br />
Roster: bnc, KAISER, piriajr, reix, SHOOWTiME<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [69](../standings_global.md)<br />
Regional Rank: [19]( ../standings_americas.md)<br />
Final Rank Value:  975.2<br />
<br />
Final Rank Value (975.2) = Starting Rank Value (904.1) + Head To Head Adjustments (71.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.377[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 904.1
- 400 + ( ( 0.249 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 904.1


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
|           34 |       69 | 2024-07-22 | Vikings KR        | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.415 (0.154)    | 0 (0.000) |    10.61 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           33 |      133 | 2024-07-20 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -2.58 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           32 |      146 | 2024-07-19 | 9z Academy        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.30 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           31 |      188 | 2024-07-18 | Intense           | L   | 1.000      | -            | -                | -                | -         |   -26.57 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           30 |      264 | 2024-07-17 | Solid             | W   | 1.000      | 0.384        | 0.037 (0.014)    | 0.791 (0.304)    | 0 (0.000) |    10.06 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           29 |      390 | 2024-07-15 | FURIA Academy     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.27 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           28 |      434 | 2024-07-12 | Legacy            | L   | 1.000      | -            | -                | -                | -         |   -11.22 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           27 |      449 | 2024-07-11 | Sharks            | W   | 1.000      | 0.371        | 0.038 (0.014)    | 0.538 (0.199)    | 0 (0.000) |    16.92 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           26 |      478 | 2024-07-10 | Solid             | W   | 1.000      | 0.371        | 0.037 (0.014)    | 0.791 (0.293)    | 0 (0.000) |    10.87 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           25 |      485 | 2024-07-09 | RED Canids        | L   | 1.000      | -            | -                | -                | -         |    -6.87 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           24 |      514 | 2024-07-08 | BESTIA            | W   | 1.000      | 0.371        | 0.114 (0.042)    | 0.740 (0.274)    | 0 (0.000) |    19.70 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           23 |      537 | 2024-07-03 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -11.43 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           22 |      538 | 2024-07-02 | Vikings KR        | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.68 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           21 |      540 | 2024-07-01 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |   -11.96 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           20 |      552 | 2024-06-29 | Patins da Ferrari | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.43 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           19 |      557 | 2024-06-28 | Sharks            | W   | 1.000      | 0.278        | 0.038 (0.010)    | -                | 0 (0.000) |    19.89 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           18 |      562 | 2024-06-27 | W7M               | W   | 1.000      | -            | -                | -                | -         |    10.04 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           17 |      568 | 2024-06-26 | Vikings KR        | W   | 1.000      | -            | -                | -                | -         |    10.79 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           16 |      764 | 2024-06-11 | KRÜ               | L   | 0.913      | -            | -                | -                | -         |   -16.33 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           15 |      779 | 2024-06-10 | BESTIA            | L   | 0.907      | -            | -                | -                | -         |    -9.20 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           14 |      814 | 2024-06-09 | inSanitY          | W   | 0.901      | 0.371        | 0.060 (0.020)    | 0.458 (0.153)    | -         |    16.94 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           13 |      822 | 2024-06-09 | inSanitY          | L   | 0.900      | -            | -                | -                | -         |   -11.33 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           12 |      881 | 2024-06-08 | W7M               | W   | 0.894      | 0.450        | -                | 0.495 (0.199)    | -         |     9.36 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           11 |      930 | 2024-06-07 | MIBR              | W   | 0.888      | 0.371        | 0.257 (0.085)    | 0.561 (0.185)    | -         |    26.83 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|           10 |      953 | 2024-06-07 | Fluxo             | L   | 0.887      | -            | -                | -                | -         |    -6.63 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            9 |      986 | 2024-06-06 | Case              | W   | 0.882      | 0.371        | 0.028 (0.009)    | 0.751 (0.245)    | -         |    13.55 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            8 |     1024 | 2024-06-06 | Case              | W   | 0.879      | 0.450        | 0.028 (0.011)    | 0.751 (0.297)    | -         |    14.61 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            7 |     1170 | 2024-06-02 | Hawks             | W   | 0.853      | -            | -                | -                | -         |     3.78 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            6 |     1225 | 2024-05-31 | Intense           | L   | 0.842      | -            | -                | -                | -         |   -21.78 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            5 |     1290 | 2024-05-29 | FURIA Academy     | W   | 0.827      | -            | -                | -                | -         |     3.07 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            4 |     1326 | 2024-05-27 | inSanitY          | L   | 0.814      | -            | -                | -                | -         |   -10.77 | bnc, KAISER, piriajr, reix, SHOOWTiME |
|            3 |     2442 | 2024-04-16 | MIBR              | L   | 0.541      | -            | -                | -                | -         |    -0.65 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            2 |     2663 | 2024-04-08 | RED Canids        | L   | 0.487      | -            | -                | -                | -         |    -3.56 | bnc, KAISER, reix, SHOOWTiME, Tomate  |
|            1 |     2706 | 2024-04-06 | MIBR              | L   | 0.475      | -            | -                | -                | -         |    -0.70 | bnc, KAISER, reix, SHOOWTiME, Tomate  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,362.51)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-14 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-07-03 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-10 |      0.908 | $1,500.00      | $1,362.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
