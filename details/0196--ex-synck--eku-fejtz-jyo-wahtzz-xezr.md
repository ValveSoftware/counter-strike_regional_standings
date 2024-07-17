### Roster Details<br />
Team Name: ex-sYnck<br />
Roster: eku, fejtZ, Jyo, Wahtzz, xezr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [196](../standings_global.md)<br />
Regional Rank: [124]( ../standings_europe.md)<br />
Final Rank Value:  521.5<br />
<br />
Final Rank Value (521.5) = Starting Rank Value (509.4) + Head To Head Adjustments (12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.4
- 400 + ( ( 0.051 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 509.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     2860 | 2024-03-15 | Endpoint     | L   | 0.373      | -            | -                | -                | -         |    -1.19 | eku, fejtZ, Jyo, Wahtzz, xezr |
|           10 |     2894 | 2024-03-14 | Young Ninjas | W   | 0.366      | 0.143        | 0.023 (0.001)    | 0.107 (0.006)    | 0 (0.000) |     9.95 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            9 |     3073 | 2024-03-07 | Sashi        | L   | 0.320      | -            | -                | -                | -         |    -0.32 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            8 |     3212 | 2024-03-02 | INGLORIOUS   | W   | 0.285      | 0.143        | 0.000 (0.000)    | 0.026 (0.001)    | 0 (0.000) |     5.02 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            7 |     3278 | 2024-02-27 | ECLOT        | L   | 0.259      | -            | -                | -                | -         |    -0.15 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            6 |     3351 | 2024-02-24 | ENCE Academy | L   | 0.239      | -            | -                | -                | -         |    -1.33 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            5 |     4018 | 2024-01-21 | 3DMAX        | L   | 0.015      | -            | -                | -                | -         |    -0.01 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            4 |     4023 | 2024-01-21 | PERA         | L   | 0.014      | -            | -                | -                | -         |    -0.03 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            3 |     4027 | 2024-01-21 | Nexus        | L   | 0.013      | -            | -                | -                | -         |    -0.05 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            2 |     4053 | 2024-01-20 | HEROIC       | L   | 0.008      | -            | -                | -                | -         |     0.00 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            1 |     4068 | 2024-01-20 | Entropiq     | W   | 0.006      | 0.143        | 0.000 (0.000)    | 0.073 (0.000)    | 0 (0.000) |     0.12 | eku, fejtZ, Jyo, Wahtzz, xezr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
