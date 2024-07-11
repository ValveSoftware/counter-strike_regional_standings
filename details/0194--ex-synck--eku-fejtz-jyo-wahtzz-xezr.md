### Roster Details<br />
Team Name: ex-sYnck<br />
Roster: eku, fejtZ, Jyo, Wahtzz, xezr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [194](../standings_global.md)<br />
Regional Rank: [119]( ../standings_europe.md)<br />
Final Rank Value:  518.4<br />
<br />
Final Rank Value (518.4) = Starting Rank Value (505.5) + Head To Head Adjustments (12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.5
- 400 + ( ( 0.050 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 505.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     2696 | 2024-03-15 | Endpoint          | L   | 0.412      | -            | -                | -                | -         |    -1.33 | eku, fejtZ, Jyo, Wahtzz, xezr |
|           17 |     2730 | 2024-03-14 | Young Ninjas      | W   | 0.405      | 0.143        | 0.017 (0.001)    | 0.012 (0.001)    | 0 (0.000) |    10.04 | eku, fejtZ, Jyo, Wahtzz, xezr |
|           16 |     2909 | 2024-03-07 | Sashi             | L   | 0.359      | -            | -                | -                | -         |    -0.36 | eku, fejtZ, Jyo, Wahtzz, xezr |
|           15 |     3048 | 2024-03-02 | INGLORIOUS        | W   | 0.325      | 0.143        | 0.000 (0.000)    | 0.029 (0.001)    | 0 (0.000) |     5.76 | eku, fejtZ, Jyo, Wahtzz, xezr |
|           14 |     3114 | 2024-02-27 | Czech Republic    | L   | 0.299      | -            | -                | -                | -         |    -0.16 | eku, fejtZ, Jyo, Wahtzz, xezr |
|           13 |     3187 | 2024-02-24 | ENCE Academy      | L   | 0.279      | -            | -                | -                | -         |    -1.52 | eku, fejtZ, Jyo, Wahtzz, xezr |
|           12 |     3854 | 2024-01-21 | 3DMAX             | L   | 0.054      | -            | -                | -                | -         |    -0.03 | eku, fejtZ, Jyo, Wahtzz, xezr |
|           11 |     3859 | 2024-01-21 | PERA              | L   | 0.053      | -            | -                | -                | -         |    -0.10 | eku, fejtZ, Jyo, Wahtzz, xezr |
|           10 |     3863 | 2024-01-21 | Romania           | L   | 0.053      | -            | -                | -                | -         |    -0.20 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            9 |     3889 | 2024-01-20 | HEROIC            | L   | 0.047      | -            | -                | -                | -         |    -0.00 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            8 |     3904 | 2024-01-20 | Entropiq          | W   | 0.046      | 0.143        | 0.000 (0.000)    | 0.085 (0.001)    | 0 (0.000) |     0.87 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            7 |     3956 | 2024-01-19 | Enterprise        | L   | 0.039      | -            | -                | -                | -         |    -0.07 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            6 |     4000 | 2024-01-18 | FORZE             | W   | 0.034      | 0.143        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.55 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            5 |     4029 | 2024-01-18 | AMKAL             | L   | 0.033      | -            | -                | -                | -         |    -0.03 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            4 |     4055 | 2024-01-17 | FreeESPI          | L   | 0.028      | -            | -                | -                | -         |    -0.56 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            3 |     4205 | 2024-01-13 | Permitta          | L   | 0.001      | -            | -                | -                | -         |    -0.00 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            2 |     4207 | 2024-01-13 | Gaimin Gladiators | L   | 0.001      | -            | -                | -                | -         |    -0.00 | eku, fejtZ, Jyo, Wahtzz, xezr |
|            1 |     4209 | 2024-01-13 | Betera            | W   | 0.000      | 0.143        | 0.008 (0.000)    | 0.059 (0.000)    | 0 (0.000) |     0.01 | eku, fejtZ, Jyo, Wahtzz, xezr |

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
