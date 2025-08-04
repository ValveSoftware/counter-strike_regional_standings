### Roster Details<br />
Team Name: ESC<br />
Roster: bajmi, moonwalk, olimp, reiko, SaMey<br />
Global Rank: [61](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [42]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  961.1<br />
<br />
Final Rank Value (961.1) = Starting Rank Value (840.9) + Head To Head Adjustments (120.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.436[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 840.9
- 400 + ( ( 0.233 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 840.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      153 | 2025-07-22 | EYEBALLERS     | W   | 1.000      | 0.435        | 0.023 (0.010)    | 0.484 (0.211)    | 0 (0.000) |    11.00 | bajmi, moonwalk, olimp, reiko, SaMey |
|           14 |      157 | 2025-07-21 | RUBY           | W   | 1.000      | 0.435        | 0.024 (0.010)    | 0.941 (0.409)    | 0 (0.000) |    14.88 | bajmi, moonwalk, olimp, reiko, SaMey |
|           13 |      175 | 2025-07-20 | AMKAL          | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.647 (0.281)    | 0 (0.000) |    10.46 | bajmi, moonwalk, olimp, reiko, SaMey |
|           12 |      315 | 2025-07-14 | fnatic         | L   | 1.000      | -            | -                | -                | -         |    -4.09 | bajmi, moonwalk, olimp, reiko, SaMey |
|           11 |      327 | 2025-07-14 | 9 Pandas       | W   | 1.000      | 0.143        | 0.028 (0.004)    | 0.261 (0.037)    | 0 (0.000) |    14.85 | bajmi, moonwalk, olimp, reiko, SaMey |
|           10 |      429 | 2025-07-10 | NXT            | W   | 1.000      | 0.435        | 0.001 (0.001)    | 0.320 (0.139)    | 0 (0.000) |    14.03 | bajmi, moonwalk, olimp, reiko, SaMey |
|            9 |      441 | 2025-07-09 | Betera         | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.355 (0.051)    | 0 (0.000) |    11.90 | bajmi, moonwalk, olimp, reiko, SaMey |
|            8 |      452 | 2025-07-09 | Partizan       | W   | 1.000      | 0.143        | 0.077 (0.011)    | 0.782 (0.112)    | 0 (0.000) |    17.91 | bajmi, moonwalk, olimp, reiko, SaMey |
|            7 |      505 | 2025-07-03 | Fire Flux      | W   | 0.986      | 0.435        | 0.003 (0.001)    | 0.512 (0.219)    | 0 (0.000) |    13.36 | bajmi, moonwalk, olimp, reiko, SaMey |
|            6 |      561 | 2025-06-25 | GUN5           | W   | 0.932      | 0.435        | 0.051 (0.021)    | 0.830 (0.336)    | 0 (0.000) |    18.15 | bajmi, moonwalk, olimp, reiko, SaMey |
|            5 |      957 | 2025-05-31 | m1x            | L   | 0.767      | -            | -                | -                | -         |   -16.45 | bajmi, moonwalk, olimp, reiko, SaMey |
|            4 |     1077 | 2025-05-22 | FUT            | W   | 0.706      | -            | -                | -                | 0 (0.000) |     6.66 | bajmi, moonwalk, olimp, reiko, SaMey |
|            3 |     1155 | 2025-05-19 | FORZE Reload   | W   | 0.686      | 0.143        | 0.005 (0.000)    | 0.406 (0.040)    | -         |     8.43 | bajmi, moonwalk, olimp, reiko, SaMey |
|            2 |     2901 | 2025-03-17 | RUBY           | L   | 0.267      | -            | -                | -                | -         |    -3.41 | bajmi, Grashog, nestee, reiko, SaMey |
|            1 |     2909 | 2025-03-17 | HEROIC Academy | W   | 0.266      | -            | -                | -                | -         |     2.62 | bajmi, Grashog, nestee, reiko, SaMey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,324.11)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-22 |      1.000 | $22,000.00     | $22,000.00      |
| 2025-06-01 |      0.774 | $419.00        | $324.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
