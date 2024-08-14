### Roster Details<br />
Team Name: Solid<br />
Roster: bnc, CSO, gbb, Lcm, xureba<br />
Global Rank: [150](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [41]( ../standings_americas.md)<br />
<br />
Final Rank Value:  713.1<br />
<br />
Final Rank Value (713.1) = Starting Rank Value (704.7) + Head To Head Adjustments (8.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 704.7
- 400 + ( ( 0.154 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 704.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |     3894 | 2024-03-14 | RED Canids    | W   | 0.181      | 0.435        | 0.069 (0.005)    | 0.728 (0.057)    | 0 (0.000) |     4.93 | bnc, CSO, gbb, Lcm, xureba |
|           22 |     3932 | 2024-03-13 | Fluxo         | W   | 0.173      | 0.435        | 0.012 (0.001)    | 0.131 (0.010)    | 0 (0.000) |     3.45 | bnc, CSO, gbb, Lcm, xureba |
|           21 |     3958 | 2024-03-12 | adalYamigos   | W   | 0.168      | 0.435        | 0.000 (0.000)    | 0.045 (0.003)    | 0 (0.000) |     1.74 | bnc, CSO, gbb, Lcm, xureba |
|           20 |     3961 | 2024-03-12 | FURIA Academy | L   | 0.167      | -            | -                | -                | -         |    -4.00 | bnc, CSO, gbb, Lcm, xureba |
|           19 |     3983 | 2024-03-11 | W7M           | W   | 0.160      | 0.435        | 0.007 (0.000)    | 0.502 (0.035)    | 0 (0.000) |     3.26 | bnc, CSO, gbb, Lcm, xureba |
|           18 |     4005 | 2024-03-10 | ODDIK         | L   | 0.153      | -            | -                | -                | -         |    -0.66 | bnc, CSO, gbb, Lcm, xureba |
|           17 |     4023 | 2024-03-09 | VELOX         | W   | 0.146      | 0.435        | 0.000 (0.000)    | -                | 0 (0.000) |     0.71 | bnc, CSO, gbb, Lcm, xureba |
|           16 |     4078 | 2024-03-07 | W7M           | L   | 0.133      | -            | -                | -                | -         |    -1.48 | bnc, CSO, gbb, Lcm, xureba |
|           15 |     4094 | 2024-03-06 | Fluxo         | W   | 0.128      | 0.450        | 0.012 (0.001)    | 0.131 (0.008)    | 0 (0.000) |     2.53 | bnc, CSO, gbb, Lcm, xureba |
|           14 |     4096 | 2024-03-06 | Fluxo         | L   | 0.128      | -            | -                | -                | -         |    -1.50 | bnc, CSO, gbb, Lcm, xureba |
|           13 |     4139 | 2024-03-05 | Sharks        | L   | 0.120      | -            | -                | -                | -         |    -0.77 | bnc, CSO, gbb, Lcm, xureba |
|           12 |     4143 | 2024-03-05 | Sharks        | L   | 0.120      | -            | -                | -                | -         |    -0.78 | bnc, CSO, gbb, Lcm, xureba |
|           11 |     4398 | 2024-02-21 | Case          | L   | 0.035      | -            | -                | -                | -         |    -0.25 | bnc, CSO, gbb, Lcm, xureba |
|           10 |     4399 | 2024-02-21 | Case          | W   | 0.035      | 0.450        | 0.030 (0.000)    | 0.768 (0.012)    | 0 (0.000) |     0.84 | bnc, CSO, gbb, Lcm, xureba |
|            9 |     4411 | 2024-02-21 | Fluxo         | L   | 0.033      | -            | -                | -                | -         |    -0.40 | bnc, CSO, gbb, Lcm, xureba |
|            8 |     4433 | 2024-02-20 | 9z            | L   | 0.028      | -            | -                | -                | -         |    -0.01 | bnc, CSO, gbb, Lcm, xureba |
|            7 |     4434 | 2024-02-20 | Flamengo      | W   | 0.027      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.19 | bnc, CSO, gbb, Lcm, xureba |
|            6 |     4436 | 2024-02-20 | Fluxo         | W   | 0.027      | 0.143        | 0.012 (0.000)    | 0.131 (0.001)    | 0 (0.000) |     0.52 | bnc, CSO, gbb, Lcm, xureba |
|            5 |     4464 | 2024-02-19 | Sharks        | L   | 0.020      | -            | -                | -                | -         |    -0.13 | bnc, CSO, gbb, Lcm, xureba |
|            4 |     4481 | 2024-02-18 | adalYamigos   | W   | 0.014      | 0.435        | -                | 0.045 (0.000)    | 0 (0.000) |     0.14 | bnc, CSO, gbb, Lcm, xureba |
|            3 |     4503 | 2024-02-17 | Case          | L   | 0.008      | -            | -                | -                | -         |    -0.06 | bnc, CSO, gbb, Lcm, xureba |
|            2 |     4516 | 2024-02-17 | inSanitY      | W   | 0.005      | -            | -                | -                | -         |     0.03 | bnc, CSO, gbb, Lcm, xureba |
|            1 |     4533 | 2024-02-16 | W7M           | W   | 0.000      | 0.303        | 0.007 (0.000)    | 0.502 (0.000)    | -         |     0.00 | bnc, CSO, gbb, Lcm, xureba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,426.87)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.761 | $1,200.00      | $912.83         |
| 2024-03-14 |      0.181 | $25,000.00     | $4,514.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
