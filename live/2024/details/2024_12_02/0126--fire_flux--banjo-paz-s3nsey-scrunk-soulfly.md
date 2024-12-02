### Roster Details<br />
Team Name: Fire Flux<br />
Roster: Banjo, paz, S3NSEY, ScrunK, soulfly<br />
Global Rank: [126](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [90]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  814.9<br />
<br />
Final Rank Value (814.9) = Starting Rank Value (737.2) + Head To Head Adjustments (77.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.2
- 400 + ( ( 0.168 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 737.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       42 | 2024-11-30 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -10.23 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           14 |       90 | 2024-11-28 | Kubix             | W   | 1.000      | 0.372        | 0.062 (0.023)    | 0.166 (0.062)    | 0 (0.000) |    18.08 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           13 |      128 | 2024-11-25 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |    -6.56 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           12 |      142 | 2024-11-24 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |   -10.72 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           11 |      164 | 2024-11-23 | XO                | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     5.44 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|           10 |      313 | 2024-11-16 | Astralis Talent   | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.332 (0.047)    | 0 (0.000) |    13.54 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            9 |      361 | 2024-11-14 | GenOne            | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.367 (0.052)    | 0 (0.000) |    15.19 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            8 |      401 | 2024-11-13 | Verdant           | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.239 (0.034)    | 0 (0.000) |    16.66 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            7 |      540 | 2024-11-08 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -2.18 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            6 |      623 | 2024-11-03 | SovvyKiNG         | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.301 (0.116)    | 0 (0.000) |    13.13 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            5 |      701 | 2024-10-31 | CPH Wolves        | W   | 0.986      | 0.384        | 0.000 (0.000)    | 0.508 (0.192)    | 0 (0.000) |    16.37 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            4 |      817 | 2024-10-25 | 9 Pandas          | L   | 0.947      | -            | -                | -                | -         |    -2.47 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            3 |      964 | 2024-10-17 | ARCRED            | W   | 0.893      | 0.384        | 0.044 (0.015)    | 0.271 (0.093)    | 0 (0.000) |    16.29 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            2 |     1060 | 2024-10-12 | Sashi             | L   | 0.859      | -            | -                | -                | -         |    -3.61 | Banjo, paz, S3NSEY, ScrunK, soulfly |
|            1 |     1566 | 2024-09-26 | B8                | L   | 0.754      | -            | -                | -                | -         |    -1.31 | Banjo, paz, S3NSEY, ScrunK, soulfly |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
