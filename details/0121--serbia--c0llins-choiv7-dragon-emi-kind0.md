### Roster Details<br />
Team Name: Serbia<br />
Roster: c0llins, choiv7, Dragon, emi, Kind0<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [121](../standings_global.md)<br />
Regional Rank: [84]( ../standings_europe.md)<br />
Final Rank Value:  830.8<br />
<br />
Final Rank Value (830.8) = Starting Rank Value (810.5) + Head To Head Adjustments (20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.087[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 810.5
- 400 + ( ( 0.191 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 810.5


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
|           14 |      139 | 2024-07-13 | Nexus           | L   | 1.000      | -            | -                | -                | -         |   -19.64 | c0llins, choiv7, Dragon, emi, Kind0 |
|           13 |      188 | 2024-07-10 | Israel          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     2.40 | c0llins, Dragon, emi, Kind0, VLDN   |
|           12 |      199 | 2024-07-09 | North Macedonia | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     3.89 | c0llins, choiv7, Dragon, emi, Kind0 |
|           11 |      206 | 2024-07-09 | Turkey          | L   | 1.000      | -            | -                | -                | -         |   -26.69 | c0llins, choiv7, Dragon, emi, Kind0 |
|           10 |      748 | 2024-06-06 | Passion UA      | L   | 0.926      | -            | -                | -                | -         |    -7.64 | aidKiT, c0llins, Dragon, emi, xicoz |
|            9 |      792 | 2024-06-05 | Enterprise      | W   | 0.920      | 0.371        | 0.055 (0.019)    | 0.635 (0.217)    | 0 (0.000) |    19.46 | aidKiT, c0llins, Dragon, emi, VLDN  |
|            8 |      845 | 2024-06-04 | Passion UA      | L   | 0.913      | -            | -                | -                | -         |    -6.94 | aidKiT, c0llins, Dragon, emi, xicoz |
|            7 |      896 | 2024-06-02 | brazylijski luz | W   | 0.899      | 0.371        | 0.012 (0.004)    | 0.282 (0.094)    | 0 (0.000) |    15.71 | aidKiT, c0llins, Dragon, emi, xicoz |
|            6 |      984 | 2024-05-30 | Permitta        | W   | 0.879      | 0.371        | 0.039 (0.013)    | 0.794 (0.259)    | 0 (0.000) |    18.10 | aidKiT, c0llins, Dragon, emi, xicoz |
|            5 |     1084 | 2024-05-25 | Zero Tenacity   | L   | 0.847      | -            | -                | -                | -         |    -4.54 | aidKiT, c0llins, Dragon, emi, xicoz |
|            4 |     1090 | 2024-05-25 | UNiTY           | W   | 0.846      | 0.371        | 0.039 (0.012)    | 0.364 (0.114)    | 0 (0.000) |    20.29 | aidKiT, c0llins, Dragon, emi, xicoz |
|            3 |     1103 | 2024-05-24 | ex-Guild Eagles | L   | 0.839      | -            | -                | -                | -         |   -10.20 | aidKiT, c0llins, Dragon, emi, xicoz |
|            2 |     1205 | 2024-05-21 | kONO            | W   | 0.819      | 0.371        | 0.042 (0.013)    | 0.595 (0.180)    | 0 (0.000) |    16.35 | aidKiT, c0llins, Dragon, emi, xicoz |
|            1 |     2078 | 2024-04-18 | BetBoom         | L   | 0.600      | -            | -                | -                | -         |    -0.27 | aidKiT, c0llins, Dragon, emi, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,628.42)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
