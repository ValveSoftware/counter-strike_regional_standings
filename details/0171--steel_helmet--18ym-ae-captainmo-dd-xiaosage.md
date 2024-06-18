### Roster Details<br />
Team Name: Steel Helmet<br />
Roster: 18yM, AE, captainMo, DD, xiaosaGe<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [171](../standings_global.md)<br />
Regional Rank: [19]( ../standings_asia.md)<br />
Final Rank Value:  652.0<br />
<br />
Final Rank Value (652.0) = Starting Rank Value (666.2) + Head To Head Adjustments (-14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.2
- 400 + ( ( 0.131 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 666.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2065 | 2024-04-09 | Nemiga    | L   | 0.733      | -            | -                | -                | -         |    -0.67 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           12 |     2095 | 2024-04-08 | Astralis  | L   | 0.726      | -            | -                | -                | -         |    -0.03 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           11 |     3534 | 2024-02-01 | GR        | L   | 0.281      | -            | -                | -                | -         |    -4.22 | 18yM, AE, captainMo, DD, xiaosaGe       |
|           10 |     3537 | 2024-02-01 | Newhappy  | L   | 0.280      | -            | -                | -                | -         |    -5.99 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            9 |     3678 | 2024-01-23 | The Huns  | L   | 0.221      | -            | -                | -                | -         |    -4.77 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            8 |     3682 | 2024-01-23 | Eruption  | W   | 0.220      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     1.32 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            7 |     3705 | 2024-01-22 | GR        | W   | 0.215      | 0.143        | 0.011 (0.000)    | 0.119 (0.004)    | 0 (0.000) |     3.56 | 18yM, Attacker, captainMo, DD, xiaosaGe |
|            6 |     3788 | 2024-01-20 | Newhappy  | L   | 0.200      | -            | -                | -                | -         |    -4.30 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            5 |     3792 | 2024-01-19 | Nirvana   | W   | 0.199      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.15 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            4 |     3851 | 2024-01-18 | Wings Up  | L   | 0.192      | -            | -                | -                | -         |    -4.35 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            3 |     4128 | 2024-01-12 | Rare Atom | W   | 0.147      | 0.143        | 0.009 (0.000)    | 0.071 (0.001)    | 0 (0.000) |     2.45 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            2 |     4130 | 2024-01-12 | Nirvana   | W   | 0.147      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.86 | 18yM, AE, captainMo, DD, xiaosaGe       |
|            1 |     4133 | 2024-01-12 | WDNMD     | W   | 0.146      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.85 | 18yM, AE, captainMo, DD, xiaosaGe       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,069.62)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
