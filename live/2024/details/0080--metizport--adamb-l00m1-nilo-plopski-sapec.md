### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, Sapec<br />
Global Rank: [80](../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../standings_europe_2024_08_14.md)<br />
Regional Rank: [58]( ../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  936.3<br />
<br />
Final Rank Value (936.3) = Starting Rank Value (813.0) + Head To Head Adjustments (123.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.189[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 813.0
- 400 + ( ( 0.209 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 813.0


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
|           22 |       92 | 2024-08-12 | Sampi             | W   | 1.000      | 0.384        | 0.024 (0.009)    | 0.981 (0.377)    | 0 (0.000) |    12.74 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |      193 | 2024-08-08 | Into the Breach   | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.81 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |      222 | 2024-08-07 | Johnny Speeds     | W   | 1.000      | 0.143        | 0.122 (0.017)    | 1.000 (0.143)    | 0 (0.000) |    27.12 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |      231 | 2024-08-07 | TSM               | W   | 1.000      | 0.143        | 0.055 (0.008)    | 0.729 (0.104)    | 0 (0.000) |    22.04 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |      278 | 2024-08-06 | BLEED             | W   | 1.000      | 0.143        | 0.117 (0.017)    | 0.520 (0.074)    | 0 (0.000) |    28.21 | adamb, Jackinho, nilo, Plopski, Sapec |
|           17 |      282 | 2024-08-06 | HAVU              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.48 | adamb, Jackinho, nilo, Plopski, Sapec |
|           16 |      287 | 2024-08-06 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -3.21 | adamb, Jackinho, nilo, Plopski, Sapec |
|           15 |      443 | 2024-08-01 | ALTERNATE aTTaX   | W   | 1.000      | 0.143        | 0.036 (0.005)    | 0.496 (0.071)    | 0 (0.000) |    17.23 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |      453 | 2024-08-01 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -11.15 | adamb, Jackinho, nilo, Plopski, Sapec |
|           13 |      550 | 2024-07-30 | QUAZAR            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.68 | adamb, Jackinho, nilo, Plopski, Sapec |
|           12 |      605 | 2024-07-28 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -11.24 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |      771 | 2024-07-23 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -13.59 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |      789 | 2024-07-22 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -12.63 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |      890 | 2024-07-19 | Sampi             | W   | 1.000      | 0.435        | 0.024 (0.010)    | 0.981 (0.426)    | 0 (0.000) |    17.00 | adamb, Jackinho, nilo, Plopski, Sapec |
|            8 |      946 | 2024-07-18 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -14.02 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     1069 | 2024-07-16 | Endpoint          | W   | 1.000      | 0.435        | 0.042 (0.018)    | 0.591 (0.257)    | 0 (0.000) |    18.23 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     2133 | 2024-05-23 | Space             | L   | 0.644      | -            | -                | -                | -         |   -10.19 | abdi, adamb, Jackinho, nilo, Plopski  |
|            5 |     2238 | 2024-05-20 | Zero Tenacity     | L   | 0.627      | -            | -                | -                | -         |    -4.77 | adamb, Jackinho, nilo, Plopski, ztr   |
|            4 |     2292 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.613      | 0.500        | 0.236 (0.072)    | 0.498 (0.153)    | -         |    18.84 | adamb, Jackinho, nilo, Plopski, ztr   |
|            3 |     2379 | 2024-05-16 | Rare Atom         | W   | 0.598      | 0.500        | 0.009 (0.003)    | 0.448 (0.134)    | -         |     9.97 | adamb, Jackinho, nilo, Plopski, ztr   |
|            2 |     2563 | 2024-05-11 | BetBoom           | L   | 0.565      | -            | -                | -                | -         |    -1.13 | adamb, Jackinho, nilo, Plopski, ztr   |
|            1 |     2578 | 2024-05-10 | EYEBALLERS        | W   | 0.559      | 0.435        | 0.005 (0.001)    | 0.614 (0.149)    | -         |    10.92 | adamb, Jackinho, nilo, Plopski, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,145.86)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
