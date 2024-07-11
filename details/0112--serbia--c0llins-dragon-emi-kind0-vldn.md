### Roster Details<br />
Team Name: Serbia<br />
Roster: c0llins, Dragon, emi, Kind0, VLDN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [112](../standings_global.md)<br />
Regional Rank: [77]( ../standings_europe.md)<br />
Final Rank Value:  845.0<br />
<br />
Final Rank Value (845.0) = Starting Rank Value (805.6) + Head To Head Adjustments (39.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.366[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.091[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 805.6
- 400 + ( ( 0.192 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 805.6


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
|           15 |       24 | 2024-07-10 | Israel          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     2.47 | c0llins, Dragon, emi, Kind0, VLDN   |
|           14 |       35 | 2024-07-09 | North Macedonia | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.011 (0.002)    | 0 (0.000) |     4.05 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |       42 | 2024-07-09 | Turkey          | L   | 1.000      | -            | -                | -                | -         |   -27.05 | c0llins, choiv7, Dragon, emi, Kind0 |
|           12 |      584 | 2024-06-06 | Passion UA      | L   | 0.965      | -            | -                | -                | -         |    -7.99 | aidKiT, c0llins, Dragon, emi, xicoz |
|           11 |      628 | 2024-06-05 | Enterprise      | W   | 0.960      | 0.371        | 0.053 (0.019)    | 0.654 (0.232)    | 0 (0.000) |    20.39 | aidKiT, c0llins, Dragon, emi, VLDN  |
|           10 |      681 | 2024-06-04 | Passion UA      | L   | 0.952      | -            | -                | -                | -         |    -7.13 | aidKiT, c0llins, Dragon, emi, xicoz |
|            9 |      732 | 2024-06-02 | brazylijski luz | W   | 0.939      | 0.371        | 0.011 (0.004)    | 0.281 (0.098)    | 0 (0.000) |    16.13 | aidKiT, c0llins, Dragon, emi, xicoz |
|            8 |      820 | 2024-05-30 | Permitta        | W   | 0.919      | 0.371        | 0.038 (0.013)    | 0.837 (0.285)    | 0 (0.000) |    19.18 | aidKiT, c0llins, Dragon, emi, xicoz |
|            7 |      920 | 2024-05-25 | Zero Tenacity   | L   | 0.886      | -            | -                | -                | -         |    -4.55 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |      926 | 2024-05-25 | UNiTY           | W   | 0.885      | 0.371        | 0.039 (0.013)    | 0.331 (0.109)    | 0 (0.000) |    21.16 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |      939 | 2024-05-24 | ex-Guild Eagles | L   | 0.879      | -            | -                | -                | -         |   -10.06 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     1041 | 2024-05-21 | kONO            | W   | 0.859      | 0.371        | 0.041 (0.013)    | 0.569 (0.181)    | 0 (0.000) |    17.54 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     1914 | 2024-04-18 | BetBoom         | L   | 0.640      | -            | -                | -                | -         |    -0.25 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     3597 | 2024-02-03 | Romania         | L   | 0.140      | -            | -                | -                | -         |    -1.85 | andr1x, Dragon, emi, ROGA, VLDN     |
|            1 |     3603 | 2024-02-03 | 500             | L   | 0.139      | -            | -                | -                | -         |    -2.63 | andr1x, Dragon, emi, ROGA, VLDN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,826.47)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
