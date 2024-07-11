### Roster Details<br />
Team Name: Rocket<br />
Roster: aleph, ayy, EMIYA, nero, nooz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [192](../standings_global.md)<br />
Regional Rank: [51]( ../standings_americas.md)<br />
Final Rank Value:  527.4<br />
<br />
Final Rank Value (527.4) = Starting Rank Value (512.3) + Head To Head Adjustments (15.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 512.3
- 400 + ( ( 0.053 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 512.3


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
|           12 |     3351 | 2024-02-16 | OMiT          | W   | 0.229      | 0.143        | 0.024 (0.001)    | 0.332 (0.011)    | 0 (0.000) |     6.08 | aleph, ayy, EMIYA, nero, nooz |
|           11 |     3354 | 2024-02-16 | MIGHT         | W   | 0.228      | 0.143        | 0.000 (0.000)    | 0.089 (0.003)    | 0 (0.000) |     3.96 | aleph, ayy, EMIYA, nero, nooz |
|           10 |     3409 | 2024-02-14 | Carpe Diem    | L   | 0.216      | -            | -                | -                | -         |    -1.21 | aleph, ayy, EMIYA, nero, nooz |
|            9 |     3411 | 2024-02-14 | Carpe Diem    | W   | 0.216      | 0.477        | 0.008 (0.001)    | 0.245 (0.025)    | 0 (0.000) |     5.64 | aleph, ayy, EMIYA, nero, nooz |
|            8 |     3644 | 2024-02-01 | BOSS          | L   | 0.129      | -            | -                | -                | -         |    -0.57 | aleph, ayy, EMIYA, nero, nooz |
|            7 |     3651 | 2024-02-01 | Nouns         | L   | 0.128      | -            | -                | -                | -         |    -0.28 | aleph, ayy, EMIYA, nero, nooz |
|            6 |     3991 | 2024-01-18 | Nouns         | L   | 0.035      | -            | -                | -                | -         |    -0.08 | aleph, ayy, EMIYA, nero, nooz |
|            5 |     3995 | 2024-01-18 | Carpe Diem    | W   | 0.035      | 0.143        | 0.008 (0.000)    | 0.245 (0.001)    | 0 (0.000) |     0.91 | aleph, ayy, EMIYA, nero, nooz |
|            4 |     4040 | 2024-01-17 | FLUFFY AIMERS | W   | 0.029      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.32 | aleph, ayy, EMIYA, nero, nooz |
|            3 |     4168 | 2024-01-14 | NRG           | W   | 0.010      | 0.143        | 0.026 (0.000)    | 0.478 (0.001)    | 0 (0.000) |     0.28 | aleph, ayy, Elk, EMIYA, nero  |
|            2 |     4173 | 2024-01-14 | BOSS          | L   | 0.009      | -            | -                | -                | -         |    -0.04 | aleph, ayy, Elk, EMIYA, nero  |
|            1 |     4199 | 2024-01-13 | Carpe Diem    | W   | 0.002      | 0.143        | 0.008 (0.000)    | 0.245 (0.000)    | 0 (0.000) |     0.05 | aleph, ayy, Elk, EMIYA, nero  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
