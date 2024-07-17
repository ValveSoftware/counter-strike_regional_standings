### Roster Details<br />
Team Name: Dusty Roots<br />
Roster: 1962, alexer, maxxkor, OwensinhoM, tom1jed<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [145](../standings_global.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
Final Rank Value:  754.1<br />
<br />
Final Rank Value (754.1) = Starting Rank Value (795.1) + Head To Head Adjustments (-41.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.1
- 400 + ( ( 0.184 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 795.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       34 | 2024-07-16 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |    -4.46 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           18 |       37 | 2024-07-16 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |    -4.66 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           17 |       44 | 2024-07-16 | KRÜ               | W   | 1.000      | 0.371        | 0.034 (0.013)    | 0.324 (0.120)    | 0 (0.000) |    21.95 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           16 |       83 | 2024-07-15 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -2.27 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           15 |       88 | 2024-07-15 | Fluxo             | L   | 1.000      | -            | -                | -                | -         |    -2.32 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           14 |      137 | 2024-07-13 | Case              | L   | 1.000      | -            | -                | -                | -         |   -10.26 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           13 |      160 | 2024-07-11 | Hype              | L   | 1.000      | -            | -                | -                | -         |   -10.42 | 1962, alexer, maxxkor, OwensinhoM, tom1jed |
|           12 |      270 | 2024-06-28 | Vikings KR        | L   | 1.000      | -            | -                | -                | -         |   -14.28 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|           11 |      281 | 2024-06-26 | Patins da Ferrari | L   | 1.000      | -            | -                | -                | -         |   -12.72 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|           10 |      301 | 2024-06-17 | inSanitY          | L   | 1.000      | -            | -                | -                | -         |    -7.05 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            9 |      622 | 2024-06-08 | paiN              | L   | 0.940      | -            | -                | -                | -         |    -0.70 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            8 |      715 | 2024-06-06 | Vikings KR        | W   | 0.928      | 0.371        | 0.012 (0.004)    | 0.430 (0.148)    | 0 (0.000) |    14.35 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            7 |      776 | 2024-06-05 | LA RUGONETA       | W   | 0.921      | 0.284        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.921) |     6.28 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            6 |      878 | 2024-06-02 | 9z Academy        | W   | 0.901      | 0.371        | 0.000 (0.000)    | 0.037 (0.012)    | 0 (0.000) |     3.09 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            5 |      948 | 2024-05-31 | FURIA Academy     | W   | 0.887      | 0.371        | 0.000 (0.000)    | 0.074 (0.024)    | 0 (0.000) |     5.78 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            4 |      992 | 2024-05-29 | Case              | L   | 0.875      | -            | -                | -                | -         |    -8.19 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            3 |     1051 | 2024-05-27 | Galorys           | L   | 0.860      | -            | -                | -                | -         |    -8.99 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            2 |     3527 | 2024-02-16 | FURIA Academy     | L   | 0.187      | -            | -                | -                | -         |    -4.79 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |
|            1 |     3643 | 2024-02-12 | Case              | L   | 0.160      | -            | -                | -                | -         |    -1.40 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,387.90)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-19 |      1.000 | $545.00        | $545.00         |
| 2024-06-05 |      0.921 | $2,000.00      | $1,842.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
