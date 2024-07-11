### Roster Details<br />
Team Name: MAG<br />
Roster: ariucle, Derek, lan, Tugu, WasteOfAmmo<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [197](../standings_global.md)<br />
Regional Rank: [25]( ../standings_asia.md)<br />
Final Rank Value:  507.1<br />
<br />
Final Rank Value (507.1) = Starting Rank Value (498.3) + Head To Head Adjustments (8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.3
- 400 + ( ( 0.047 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 498.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3124 | 2024-02-26 | ATOX           | L   | 0.296      | -            | -                | -                | -         |    -0.73 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           14 |     3140 | 2024-02-25 | The MongolZ    | L   | 0.289      | -            | -                | -                | -         |    -0.00 | ariucle, Derek, lan, Tugu, WasteOfAmmo    |
|           13 |     3347 | 2024-02-17 | Newhappy       | L   | 0.231      | -            | -                | -                | -         |    -3.46 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           12 |     3373 | 2024-02-16 | GR             | W   | 0.226      | 0.143        | 0.012 (0.000)    | 0.078 (0.003)    | 0 (0.000) |     5.29 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           11 |     3379 | 2024-02-16 | Lynn Vision    | L   | 0.224      | -            | -                | -                | -         |    -0.19 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|           10 |     3404 | 2024-02-15 | SEAW           | W   | 0.218      | 0.143        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     3.32 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            9 |     3440 | 2024-02-14 | -72c           | W   | 0.212      | 0.143        | 0.000 (0.000)    | 0.016 (0.000)    | 0 (0.000) |     2.42 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            8 |     3861 | 2024-01-21 | Trouble makers | L   | 0.053      | -            | -                | -                | -         |    -0.88 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            7 |     3877 | 2024-01-20 | Gods Reign     | W   | 0.050      | 0.143        | 0.002 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     1.10 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            6 |     3963 | 2024-01-19 | Dewa United    | W   | 0.038      | 0.143        | 0.003 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.69 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            5 |     3978 | 2024-01-19 | Drippy Lab     | W   | 0.037      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.43 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            4 |     4064 | 2024-01-17 | Gods Reign     | L   | 0.026      | -            | -                | -                | -         |    -0.25 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            3 |     4072 | 2024-01-17 | Dewa United    | W   | 0.025      | 0.143        | 0.003 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.46 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            2 |     4074 | 2024-01-17 | RESILIENCE     | W   | 0.025      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.29 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |
|            1 |     4079 | 2024-01-17 | Enigma         | W   | 0.025      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.28 | ariucle, Derek, Jaytzy, Tugu, WasteOfAmmo |

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
