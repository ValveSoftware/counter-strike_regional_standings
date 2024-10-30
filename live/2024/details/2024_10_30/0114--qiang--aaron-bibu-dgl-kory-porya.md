### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [114](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [80]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  827.9<br />
<br />
Final Rank Value (827.9) = Starting Rank Value (770.0) + Head To Head Adjustments (58.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 770.0
- 400 + ( ( 0.187 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 770.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |     2006 | 2024-08-23 | Insilio         | L   | 0.745      | -            | -                | -                | -         |    -8.52 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     2036 | 2024-08-22 | BIG             | L   | 0.738      | -            | -                | -                | -         |    -0.56 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     2064 | 2024-08-21 | SAW             | L   | 0.733      | -            | -                | -                | -         |    -0.17 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     2095 | 2024-08-21 | Sashi           | W   | 0.732      | 0.143        | 0.114 (0.012)    | 0.632 (0.066)    | 0 (0.000) |    17.85 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     2451 | 2024-08-09 | Sashi           | L   | 0.651      | -            | -                | -                | -         |    -4.67 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     2465 | 2024-08-08 | Permitta        | W   | 0.646      | 0.426        | 0.060 (0.017)    | 1.000 (0.275)    | 0 (0.000) |    16.84 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     2763 | 2024-07-31 | B8              | L   | 0.594      | -            | -                | -                | -         |    -0.69 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     2812 | 2024-07-30 | SovvyKiNG       | W   | 0.587      | 0.500        | 0.002 (0.001)    | 0.412 (0.121)    | 0 (0.000) |     9.59 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     2847 | 2024-07-29 | ARCRED          | L   | 0.580      | -            | -                | -                | -         |    -7.95 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     3172 | 2024-07-19 | Nexus           | L   | 0.513      | -            | -                | -                | -         |    -6.49 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     3205 | 2024-07-18 | Nemiga          | L   | 0.507      | -            | -                | -                | -         |    -0.32 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     3284 | 2024-07-17 | Verdant         | W   | 0.500      | 0.333        | 0.029 (0.005)    | 0.271 (0.045)    | 0 (0.000) |    11.02 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     3340 | 2024-07-16 | Aurora          | L   | 0.494      | -            | -                | -                | -         |    -1.45 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     3391 | 2024-07-15 | Betera          | W   | 0.487      | 0.333        | -                | 0.097 (0.016)    | 0 (0.000) |     3.77 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     3708 | 2024-06-13 | ex-Enterprise   | W   | 0.274      | 0.379        | 0.037 (0.004)    | 0.445 (0.046)    | 0 (0.000) |     6.88 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     3744 | 2024-06-12 | Rebels          | W   | 0.267      | 0.379        | 0.066 (0.007)    | 0.476 (0.048)    | 0 (0.000) |     6.03 | Aaron, Bibu, DGL, kory, Porya      |
|           12 |     3764 | 2024-06-11 | ECLOT           | W   | 0.261      | 0.379        | 0.100 (0.010)    | 0.780 (0.077)    | 0 (0.000) |     7.65 | Aaron, Bibu, DGL, kory, Porya      |
|           11 |     3967 | 2024-06-07 | B8              | L   | 0.233      | -            | -                | -                | -         |    -0.19 | Aaron, Bibu, DGL, kory, Porya      |
|           10 |     3971 | 2024-06-07 | Aurora          | L   | 0.232      | -            | -                | -                | -         |    -0.61 | Aaron, Bibu, DGL, kory, Porya      |
|            9 |     4071 | 2024-06-05 | The Prodigies   | W   | 0.221      | 0.379        | 0.009 (0.001)    | -                | 0 (0.000) |     2.59 | Aaron, Bibu, DGL, kory, Porya      |
|            8 |     4154 | 2024-06-03 | GL Academy      | W   | 0.208      | -            | -                | -                | 0 (0.000) |     1.23 | Aaron, Bibu, DGL, kory, Porya      |
|            7 |     4260 | 2024-05-30 | Rebels          | L   | 0.181      | -            | -                | -                | -         |    -1.61 | Aaron, Bibu, DGL, kory, Porya      |
|            6 |     4440 | 2024-05-22 | System5         | W   | 0.128      | -            | -                | -                | -         |     1.18 | Aaron, Bibu, DGL, kory, Porya      |
|            5 |     4488 | 2024-05-21 | EYEBALLERS      | W   | 0.121      | -            | -                | -                | -         |     1.55 | Aaron, Bibu, DGL, kory, Porya      |
|            4 |     4527 | 2024-05-20 | Nexus           | W   | 0.113      | 0.379        | 0.028 (0.001)    | 0.517 (0.022)    | -         |     2.41 | Aaron, Bibu, DGL, kory, Porya      |
|            3 |     4697 | 2024-05-15 | Norway          | W   | 0.080      | -            | -                | -                | -         |     0.73 | Aaron, Bibu, DGL, kory, Porya      |
|            2 |     4756 | 2024-05-14 | ALTERNATE aTTaX | W   | 0.074      | 0.500        | 0.082 (0.003)    | 0.746 (0.028)    | -         |     1.86 | Aaron, Bibu, DGL, kory, Porya      |
|            1 |     4980 | 2024-05-04 | FlyQuest        | L   | 0.006      | -            | -                | -                | -         |    -0.01 | Aaron, Bibu, Ciocardau, DGL, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,183.00)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.520 | $1,250.00      | $650.24         |
| 2024-06-13 |      0.274 | $10,895.00     | $2,989.31       |
| 2024-06-09 |      0.247 | $500.00        | $123.66         |
| 2024-05-12 |      0.060 | $7,000.00      | $419.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
