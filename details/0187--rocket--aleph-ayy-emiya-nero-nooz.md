### Roster Details<br />
Team Name: Rocket<br />
Roster: aleph, ayy, EMIYA, nero, nooz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [187](../standings_global.md)<br />
Regional Rank: [50]( ../standings_americas.md)<br />
Final Rank Value:  563.8<br />
<br />
Final Rank Value (563.8) = Starting Rank Value (519.3) + Head To Head Adjustments (44.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.3
- 400 + ( ( 0.059 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 519.3


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
|           17 |     3218 | 2024-02-16 | OMiT          | W   | 0.384      | 0.143        | 0.022 (0.001)    | 0.311 (0.017)    | 0 (0.000) |     9.87 | aleph, ayy, EMIYA, nero, nooz |
|           16 |     3221 | 2024-02-16 | MIGHT         | W   | 0.384      | 0.143        | 0.000 (0.000)    | 0.111 (0.006)    | 0 (0.000) |     6.33 | aleph, ayy, EMIYA, nero, nooz |
|           15 |     3276 | 2024-02-14 | Carpe Diem    | L   | 0.372      | -            | -                | -                | -         |    -2.58 | aleph, ayy, EMIYA, nero, nooz |
|           14 |     3278 | 2024-02-14 | Carpe Diem    | W   | 0.371      | 0.477        | 0.007 (0.001)    | 0.278 (0.049)    | 0 (0.000) |     9.28 | aleph, ayy, EMIYA, nero, nooz |
|           13 |     3511 | 2024-02-01 | BOSS          | L   | 0.285      | -            | -                | -                | -         |    -1.39 | aleph, ayy, EMIYA, nero, nooz |
|           12 |     3518 | 2024-02-01 | Nouns         | L   | 0.283      | -            | -                | -                | -         |    -0.77 | aleph, ayy, EMIYA, nero, nooz |
|           11 |     3858 | 2024-01-18 | Nouns         | L   | 0.191      | -            | -                | -                | -         |    -0.51 | aleph, ayy, EMIYA, nero, nooz |
|           10 |     3862 | 2024-01-18 | Carpe Diem    | W   | 0.191      | 0.143        | 0.007 (0.000)    | 0.278 (0.008)    | 0 (0.000) |     4.83 | aleph, ayy, EMIYA, nero, nooz |
|            9 |     3907 | 2024-01-17 | FLUFFY AIMERS | W   | 0.185      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.81 | aleph, ayy, EMIYA, nero, nooz |
|            8 |     4035 | 2024-01-14 | NRG           | W   | 0.166      | 0.143        | 0.024 (0.001)    | 0.507 (0.012)    | 0 (0.000) |     4.57 | aleph, ayy, Elk, EMIYA, nero  |
|            7 |     4040 | 2024-01-14 | BOSS          | L   | 0.165      | -            | -                | -                | -         |    -0.76 | aleph, ayy, Elk, EMIYA, nero  |
|            6 |     4066 | 2024-01-13 | Carpe Diem    | W   | 0.157      | 0.143        | 0.007 (0.000)    | 0.278 (0.006)    | 0 (0.000) |     4.06 | aleph, ayy, Elk, EMIYA, nero  |
|            5 |     4101 | 2024-01-12 | For Fun       | W   | 0.152      | 0.143        | 0.006 (0.000)    | 0.045 (0.001)    | 0 (0.000) |     3.42 | aleph, ayy, Elk, EMIYA, nero  |
|            4 |     4112 | 2024-01-12 | M80           | L   | 0.151      | -            | -                | -                | -         |    -0.07 | aleph, ayy, Elk, EMIYA, nero  |
|            3 |     4135 | 2024-01-12 | For Fun       | W   | 0.146      | 0.143        | 0.006 (0.000)    | 0.045 (0.001)    | 0 (0.000) |     3.33 | aleph, ayy, Elk, EMIYA, nero  |
|            2 |     4137 | 2024-01-11 | LOS           | W   | 0.146      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     1.56 | aleph, ayy, Elk, EMIYA, nero  |
|            1 |     4141 | 2024-01-11 | The Nomads    | W   | 0.145      | -            | -                | -                | -         |     1.55 | aleph, ayy, Elk, EMIYA, nero  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
