### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, hotd0g <br />
Global Rank: [150](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [101]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  708.4<br />
<br />
Final Rank Value (708.4) = Starting Rank Value (692.2) + Head To Head Adjustments (16.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.2
- 400 + ( ( 0.151 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 692.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     2703 | 2024-07-21 | 9INE            | L   | 0.666      | -            | -                | -                | -         |    -4.00 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           18 |     2769 | 2024-07-19 | UNiTY           | W   | 0.653      | 0.371        | 0.046 (0.011)    | 0.470 (0.114)    | 0 (0.000) |    18.03 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           17 |     2897 | 2024-07-17 | FORZE Reload    | L   | 0.639      | -            | -                | -                | -         |   -15.22 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           16 |     3002 | 2024-07-15 | TNL             | W   | 0.625      | 0.143        | 0.002 (0.000)    | 0.087 (0.008)    | 0 (0.000) |     8.28 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           15 |     3993 | 2024-05-24 | Illuminar       | W   | 0.279      | 0.371        | 0.003 (0.000)    | 0.045 (0.005)    | 0 (0.000) |     4.31 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           14 |     4457 | 2024-05-10 | BetBoom         | L   | 0.186      | -            | -                | -                | -         |    -0.35 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           13 |     4524 | 2024-05-07 | Permitta        | W   | 0.165      | 0.435        | 0.036 (0.003)    | 0.918 (0.066)    | 0 (0.000) |     4.10 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           12 |     4538 | 2024-05-06 | B8              | L   | 0.160      | -            | -                | -                | -         |    -0.58 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           11 |     4566 | 2024-05-04 | MOUZ NXT        | W   | 0.148      | 0.435        | 0.070 (0.005)    | 0.478 (0.031)    | 0 (0.000) |     3.60 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           10 |     4625 | 2024-05-01 | ENCE Academy    | W   | 0.128      | 0.435        | 0.009 (0.001)    | 0.272 (0.015)    | 0 (0.000) |     2.42 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|            9 |     4654 | 2024-04-30 | EYEBALLERS      | L   | 0.121      | -            | -                | -                | -         |    -1.63 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            8 |     4691 | 2024-04-29 | Nexus           | L   | 0.112      | -            | -                | -                | -         |    -1.29 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            7 |     4732 | 2024-04-27 | Permitta        | L   | 0.099      | -            | -                | -                | -         |    -0.64 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            6 |     4751 | 2024-04-26 | Insilio         | L   | 0.093      | -            | -                | -                | -         |    -0.57 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            5 |     4824 | 2024-04-23 | ALTERNATE aTTaX | L   | 0.072      | -            | -                | -                | -         |    -0.33 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            4 |     4890 | 2024-04-20 | ALTERNATE aTTaX | L   | 0.052      | -            | -                | -                | -         |    -0.23 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            3 |     4964 | 2024-04-18 | MOUZ NXT        | L   | 0.040      | -            | -                | -                | -         |    -0.30 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            2 |     4987 | 2024-04-18 | Nexus           | W   | 0.039      | 0.384        | 0.006 (0.000)    | 0.477 (0.007)    | 0 (0.000) |     0.78 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            1 |     5012 | 2024-04-17 | ENCE            | L   | 0.033      | -            | -                | -                | -         |    -0.11 | bajmi, Demho, ex1st, fr3nd, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,856.04)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-25 |      0.692 | $1,000.00      | $691.66         |
| 2024-06-06 |      0.366 | $3,000.00      | $1,097.40       |
| 2024-05-02 |      0.134 | $500.00        | $66.98          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
