### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [155](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [108]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  728.8<br />
<br />
Final Rank Value (728.8) = Starting Rank Value (694.4) + Head To Head Adjustments (34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 694.4
- 400 + ( ( 0.147 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 694.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     2718 | 2024-08-23 | Insilio       | L   | 0.525      | -            | -                | -                | -         |    -4.42 | Aaron, Bibu, DGL, kory, Porya |
|           19 |     2748 | 2024-08-22 | BIG           | L   | 0.519      | -            | -                | -                | -         |    -0.24 | Aaron, Bibu, DGL, kory, Porya |
|           18 |     2776 | 2024-08-21 | SAW           | L   | 0.514      | -            | -                | -                | -         |    -0.11 | Aaron, Bibu, DGL, kory, Porya |
|           17 |     2807 | 2024-08-21 | Sashi         | W   | 0.512      | 0.143        | 0.056 (0.004)    | 0.667 (0.049)    | 0 (0.000) |    14.13 | Aaron, Bibu, DGL, kory, Porya |
|           16 |     3163 | 2024-08-09 | Sashi         | L   | 0.432      | -            | -                | -                | -         |    -1.73 | Aaron, Bibu, DGL, kory, Porya |
|           15 |     3177 | 2024-08-08 | Permitta      | W   | 0.427      | 0.426        | 0.064 (0.012)    | 1.000 (0.182)    | 0 (0.000) |    12.90 | Aaron, Bibu, DGL, kory, Porya |
|           14 |     3475 | 2024-07-31 | B8            | L   | 0.375      | -            | -                | -                | -         |    -0.47 | Aaron, Bibu, DGL, kory, Porya |
|           13 |     3524 | 2024-07-30 | SovvyKiNG     | W   | 0.368      | 0.500        | 0.000 (0.000)    | 0.301 (0.055)    | 0 (0.000) |     4.70 | Aaron, Bibu, DGL, kory, Porya |
|           12 |     3559 | 2024-07-29 | ARCRED        | L   | 0.361      | -            | -                | -                | -         |    -3.94 | Aaron, Bibu, DGL, kory, Porya |
|           11 |     3884 | 2024-07-19 | Nexus         | L   | 0.293      | -            | -                | -                | -         |    -0.13 | Aaron, Bibu, DGL, kory, Porya |
|           10 |     3917 | 2024-07-18 | Nemiga        | L   | 0.288      | -            | -                | -                | -         |    -0.16 | Aaron, Bibu, DGL, kory, Porya |
|            9 |     3996 | 2024-07-17 | Verdant       | W   | 0.281      | 0.333        | 0.015 (0.001)    | 0.239 (0.022)    | 0 (0.000) |     6.65 | Aaron, Bibu, DGL, kory, Porya |
|            8 |     4052 | 2024-07-16 | Aurora        | L   | 0.274      | -            | -                | -                | -         |    -0.86 | Aaron, Bibu, DGL, kory, Porya |
|            7 |     4103 | 2024-07-15 | Betera        | W   | 0.267      | 0.333        | 0.002 (0.000)    | 0.074 (0.007)    | 0 (0.000) |     4.30 | Aaron, Bibu, DGL, kory, Porya |
|            6 |     4420 | 2024-06-13 | ex-Enterprise | W   | 0.055      | 0.379        | 0.014 (0.000)    | 0.322 (0.007)    | 0 (0.000) |     1.42 | Aaron, Bibu, DGL, kory, Porya |
|            5 |     4456 | 2024-06-12 | Rebels        | W   | 0.048      | 0.379        | 0.037 (0.001)    | 0.426 (0.008)    | 0 (0.000) |     1.15 | Aaron, Bibu, DGL, kory, Porya |
|            4 |     4476 | 2024-06-11 | ECLOT         | W   | 0.041      | 0.379        | 0.198 (0.003)    | 1.000 (0.016)    | 0 (0.000) |     1.27 | Aaron, Bibu, DGL, kory, Porya |
|            3 |     4679 | 2024-06-07 | B8            | L   | 0.013      | -            | -                | -                | -         |    -0.01 | Aaron, Bibu, DGL, kory, Porya |
|            2 |     4683 | 2024-06-07 | Aurora        | L   | 0.013      | -            | -                | -                | -         |    -0.04 | Aaron, Bibu, DGL, kory, Porya |
|            1 |     4783 | 2024-06-05 | The Prodigies | W   | 0.001      | 0.379        | 0.005 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.01 | Aaron, Bibu, DGL, kory, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($973.17)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.301 | $1,250.00      | $375.81         |
| 2024-06-13 |      0.055 | $10,895.00     | $597.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
